enum MassaUnit {
  gram = 'g',
  kilogram = 'kg',
}

export const massaConverter = (  
  value: number,
  fromUnit: MassaUnit,
  toUnit: MassaUnit): number => { 
    if (fromUnit === MassaUnit.kilogram && toUnit === MassaUnit.gram) {
      return value * 1000;
    } else if (fromUnit === MassaUnit.gram && toUnit === MassaUnit.kilogram) {
      return value / 1000;
    } else if (fromUnit === toUnit) {
      return value * 1000;
    } else {
      throw new Error('Conversão de massa não suportada.');
    }
  }