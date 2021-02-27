export const formateCurrency = (num) => {
  return "$ " + Number(num.toFixed(2)).toLocaleString() + " ";
}