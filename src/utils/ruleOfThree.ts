export const ruleOfThree =(
  medida_1: number,
  medida_2: number,
  price_product_1: number,
  price_product_2: number,
): any =>  {
  const price_100_product_1 = ((price_product_1/ medida_1) * 100).toFixed(2);
  const price_100_product_2 = ((price_product_2 / medida_2) * 100).toFixed(2);
  const response = {
    price_100_product_1,
    price_100_product_2
  }
  return response
}