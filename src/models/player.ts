import House from "./house";
import Mortgage from "./mortgage";

export type PlayerType = 'Human' | 'AI';

export default interface Player {
  name: string;
  type: PlayerType;
  budget: number;
  house?: House;
  mortgage?: Mortgage;
  earning: number;
  expenses: number;
}