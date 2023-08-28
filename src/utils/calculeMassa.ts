import { dataTypes } from "../screen/Home";
import { ruleOfThree } from "./ruleOfThree"


export const massaConverter = (
  value: number,
  fromUnit: string,
  toUnit: string): number => {
  if (fromUnit === 'kg' && toUnit === 'g') {
    return value * 1000;
  } else if (fromUnit === 'g' && toUnit === 'g') {
    return value;
  } else {
    throw new Error('Conversão de massa não suportada.');
  }
}

export const calculeMassa = async (data: dataTypes[]) => {
  let values = data
  let bestProduct: any = {
    id: '',
    price_100_measure: 0,
    amount_convert: 0,
    name: '',
    price: 0,
    amount: 0,
    medida: '',
  };
  try {
    for (let i = 0; i <= values.length - 1; i++) {
      values[i] = { ...values[i], price: values[i].price.replace(/,/g, '.') }
      values[i] = { ...values[i], amount_convert: massaConverter(values[i].amount, values[i].medida, 'g') }
      values[i] = { ...values[i], price_100_measure: ruleOfThree(values[i].price, values[i].amount_convert) }
      if (!bestProduct.price_100_measure) {
        bestProduct = values[i]
      }
      if (values[i].price_100_measure <= bestProduct.price_100_measure) {
        bestProduct = values[i]
      }
    }
  } catch (error) {
    console.log(error)
  }
  return { values, bestProduct }
}