import Mortgage, { Bank } from "../models/mortgage";

class MatchService {
  private availableBanks: Bank[] = [
    "Concordia",
    "San Paganino",
    "Banco dei Pascoli Verdi",
    "IndiceBanca",
    "CariCividale",
    "Findos",
  ];
  private availableNames: string[] = [
    "Strozz 4000",
    "Blackhole",
    "NonMiPaghiPiu",
    "Tasso Leggero Anzi Leggerissimo",
    "Euribor Negli Occhi",
    "Mutuo per Giovani Vecchi",
    "Strozz 1000 Plus",
    "MoneyBurner 9000",
  ];
  private availableHousePercentage: number[] = [60, 80, 100];

  createNewMatch = () => {};

  getMortgages = () => {
    const numberOfMortgages = this.generateRandomInteger(2, 7);
    const output = [...Array(numberOfMortgages).keys()].map((_) =>
      this.generateMortgage()
    );
    return output;
  };

  private generateMortgage = (): Mortgage => {
    return {
      id: this.generateRandomInteger(1, 9999),
      bank: this.getRandom(this.availableBanks),
      name: this.getRandom(this.availableNames),
      durationTurns: this.generateRandomInteger(15, 30, 10),
      turn: 0,
      housePercentage: this.getRandom(this.availableHousePercentage),
      rate: {
        type: "FIX",
        value: +this.generateRandomFloat(0, 10).toFixed(2),
      },
    };
  };

  private getRandom = <T>(haystack: T[]): T => {
    return haystack[this.generateRandomInteger(0, haystack.length - 1)];
  };

  generateRandomFloat = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  generateRandomInteger = (min: number, max: number, step: number = 1) => {
    return Math.round(this.generateRandomFloat(min / step, max / step)) * step;
  };
}
const matchService = new MatchService();
export default matchService;
