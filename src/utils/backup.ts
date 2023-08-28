import { dataTypes } from "../screen/Home";
import { ruleOfThree } from "./ruleOfThree"



export const volumeConverter = (
  value: number,
  fromUnit: string,
  toUnit: string): number => {
  if (fromUnit === 'l' && toUnit === 'ml') {
    return value * 1000;
  } else if (fromUnit === 'ml' && toUnit === 'ml') {
    return value;
  } else {
    throw new Error('Conversão de volume não suportada.');
  }
}

export const calculeVolume = (data: dataTypes[]) => {
  let values = data
  let index = 0;
  values.map(async item => {
    values[index] = { ...item, price: item.price.replace(/,/g, '.') }
    index++
  })
  index = 0
  values.map(item => {
    values[index] = { ...item, medida: 'ml', amount: volumeConverter(item.amount, item.medida, 'ml') }
    index++
  })
  index = 0
  values.map(item => {
    values[index] = { ...item, price_100_measure: ruleOfThree(parseFloat(item.price), item.amount) }
    index++
  })
  console.log(values)
}