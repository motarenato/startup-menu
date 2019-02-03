export default function returnPrice(
  ingredientesLanche = [],
  ingredientesData = {},
  ingredientesAdicionais = {},
) {
  let ingredientesAdicionaisPrice = 0;
  let ingredientesLanchePrice = 0;

  ingredientesLanche.map(
    item =>
      (ingredientesLanchePrice =
        ingredientesLanchePrice +
        (ingredientesData[item] ? ingredientesData[item].value : 0)),
  );

  Object.keys(ingredientesAdicionais).map(
    item =>
      (ingredientesAdicionaisPrice = ingredientesData[item]
        ? ingredientesAdicionaisPrice +
          ingredientesData[item].value * ingredientesAdicionais[item]
        : 0),
  );
  console.log(ingredientesAdicionais);
  return ingredientesLanchePrice + ingredientesAdicionaisPrice;
}
