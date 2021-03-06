export type Bank = 'Banco dei Pascoli Verdi' |
'Concordia' | 'San Paganino' | 'Cassa Dritta' | 'Finbrunetta'

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
  name: string;
  bank: Bank;
  housePercentage: number;
  durationTurns: number;
  rate: MortgageFixRate | MortgageVariableRate;
}