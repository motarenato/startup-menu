export default function formatCurrency(currency, minimumFractionDigits) {
  /** Verifica se o browser é o IE, pois na versão 10 o Intl não é suportado */
  const isIE = /* @cc_on!@ */ false || !!document.documentMode;
  if (currency === false || isIE) return currency;
  const newCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits,
  });

  return newCurrency.format(parseFloat(currency || 0));
}
