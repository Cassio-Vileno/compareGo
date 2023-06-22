import { ruleOfThree } from "./ruleOfThree"
import { massaConverter } from "./massaConverter"

export const calculeMassa = (data: any) => {
  let values = data
  values = { ...values, price_product_1: data.price_product_1.replace(/,/g, '.') }
  values = { ...values, price_product_2: data.price_product_2.replace(/,/g, '.') }

  if (values.massa_1 == 'l') {
    values = { ...values, massa_product_1: massaConverter(data.massa_product_1, data.massa_1, data.massa_2) }
  }
  if (values.massa_2 == 'l') {
    values = { ...values, massa_product_2: massaConverter(data.massa_product_2, data.massa_2, data.massa_1) }
  }
  const res = ruleOfThree(values.massa_product_1, values.massa_product_2, values.price_product_1, values.price_product_2)
  return res
}