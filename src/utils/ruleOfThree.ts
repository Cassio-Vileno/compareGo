export const ruleOfThree = (
  price: number,
  amount: number,
): any => {
  return ((price / amount) * 100).toFixed(2);
}