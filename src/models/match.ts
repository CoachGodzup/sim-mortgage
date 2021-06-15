import House from "./house";
import Mortgage from "./mortgage";
import Player from "./player";

export default interface Match {
  id: string;
  actualTurn: number;
  maxTurn: number;
  players: Player[];
  activePlayerIndex: number;
  house: House;
  availableMortgages: Mortgage[];
  euriborRate: number;
  startingBudget: number;
}
