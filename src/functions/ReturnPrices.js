export default function returnPrice(
  ingredientesLanche = [],
  ingredientesData = {},
  ingredientesAdicionais = {},
) {
  let ingredientesAdicionaisPrice = 0;
  let ingredientesLanchePrice = 0;
  let hasBacon = false;
  let hasCarne = false;
  let hasQueijo = false;

  ingredientesLanche.map(item => {
    ingredientesLanchePrice =
      ingredientesLanchePrice +
      (ingredientesData[item] ? ingredientesData[item].value : 0);
    if (item === 'bacon') hasBacon = true;
    if (item === 'hamb-de-carne') hasCarne = true;
    if (item === 'queijo') hasQueijo = true;
  });

  Object.keys(ingredientesAdicionais).map(
    item =>
      (ingredientesAdicionaisPrice = ingredientesData[item]
        ? ingredientesAdicionaisPrice +
          ingredientesData[item].value * ingredientesAdicionais[item]
        : 0),
  );
  let price = ingredientesLanchePrice + ingredientesAdicionaisPrice;

  //promoções
  //Light
  let promoLight = false;
  let promoCarne = false;
  let promoQueijo = false;
  if (
    !(hasBacon || ingredientesAdicionais['bacon'] > 0) &&
    ingredientesAdicionais['alface']
  ) {
    price = price - 0.1 * price;
    promoLight = true;
  }
  //Muita Carne
  if (
    hasCarne & (ingredientesAdicionais['hamb-de-carne'] > 1) ||
    ingredientesAdicionais['hamb-de-carne'] > 2
  ) {
    let qtd = ingredientesAdicionais['hamb-de-carne'] + (hasCarne ? 1 : 0);
    qtd = Math.floor(qtd / 3);
    price = price - qtd * ingredientesData['hamb-de-carne'].value;
    promoCarne = true;
  }

  //Muito Queijo
  if (
    hasQueijo & (ingredientesAdicionais['queijo'] > 1) ||
    ingredientesAdicionais['queijo'] > 2
  ) {
    let qtd = ingredientesAdicionais['queijo'] + (hasQueijo ? 1 : 0);
    qtd = Math.floor(qtd / 3);
    price = price - qtd * ingredientesData['queijo'].value;
    promoQueijo = true;
  }
  const promocoes = { promoLight, promoCarne, promoQueijo };
  return { price, promocoes };
}
