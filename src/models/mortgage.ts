export type Bank = 'Banco dei Pascoli Verdi' |
'Concordia' | 'San Paganino' | 'Cassa Dritta' | 'Findos' | 'IndiceBanca' | 'CariCividale'
export interface MortgageRate {
  type: 'FIX' | 'VARIABLE'
}

export interface MortgageFixRate extends MortgageRate {
  type: 'FIX',
  value: number
}

export interface MortgageVariableRate extends MortgageRate {
  type: 'VARIABLE',
  fixedValue: number,
  euriborMultiplier: number;
}

export default interface Mortgage {
  id: number;
  turn: number;
  bank: Bank;
  name: string;
  housePercentage: number;
  durationTurns: number;
  rate: MortgageFixRate | MortgageVariableRate;
}