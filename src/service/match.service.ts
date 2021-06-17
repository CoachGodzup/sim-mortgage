import Mortgage, { Bank } from "../models/mortgage";
import {
  generateRandomFloat,
  generateRandomInteger,
  getRandom,
} from "./utils.service";
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
    const numberOfMortgages = generateRandomInteger(2, 7);
    const output = [...Array(numberOfMortgages).keys()].map((_) =>
      this.generateMortgage()
    );
    return output;
  };

  private generateMortgage = (): Mortgage => {
    return {
      id: generateRandomInteger(1, 9999),
      bank: getRandom(this.availableBanks),
      name: getRandom(this.availableNames),
      durationTurns: generateRandomInteger(15, 30, 10),
      turn: 0,
      housePercentage: getRandom(this.availableHousePercentage),
      rate: {
        type: "FIX",
        value: +generateRandomFloat(0, 10).toFixed(2),
      },
    };
  };
}
const matchService = new MatchService();
export default matchService;
