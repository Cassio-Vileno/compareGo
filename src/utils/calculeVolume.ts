import { ruleOfThree } from "./ruleOfThree"
import { volumeConverter } from "./volumeConverter"

export const calculeVolume = (data: any) => {
  let values = data
  values = { ...values, price_product_1: data.price_product_1.replace(/,/g, '.') }
  values = { ...values, price_product_2: data.price_product_2.replace(/,/g, '.') }

  if (values.volume_1 == 'l') {
    values = { ...values, volume_product_1: volumeConverter(data.volume_product_1, data.volume_1, data.volume_2) }
  }
  if (values.volume_2 == 'l') {
    values = { ...values, volume_product_2: volumeConverter(data.volume_product_2, data.volume_2, data.volume_1) }
  }
  const res = ruleOfThree(values.volume_product_1, values.volume_product_2, values.price_product_1, values.price_product_2)
  return res
}