import Player, { PlayerType } from "../models/player";
import { generateRandomString } from "./utils.service";

class PlayerService {
  createPlayer = (nickname: string, type: PlayerType = 'Human'): Player => {
    return {
      id: generateRandomString(),
      name: nickname,
      type: type,
      budget: 50000,
      earning: 1500,
      expenses: 800,
    };
  };
}

export const playerService = new PlayerService();
