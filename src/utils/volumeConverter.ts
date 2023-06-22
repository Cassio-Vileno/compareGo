enum VolumeUnit {
  Milliliter = 'ml',
  Liter = 'l',
}

export const volumeConverter = (  
  value: number,
  fromUnit: VolumeUnit,
  toUnit: VolumeUnit): number => { 
    if (fromUnit === VolumeUnit.Liter && toUnit === VolumeUnit.Milliliter) {
      return value * 1000;
    } else if (fromUnit === VolumeUnit.Milliliter && toUnit === VolumeUnit.Liter) {
      return value / 1000;
    } else if (fromUnit === toUnit) {
      return value * 1000;
    } else {
      throw new Error('Conversão de volume não suportada.');
    }
  }