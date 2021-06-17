import Player from "../models/player";
import { generateRandomString } from "./utils.service";

class PlayerService {
  createPlayer = (nickname: string): Player => {
    return {
      id: generateRandomString(),
      name: nickname,
      type: "Human",
      budget: 50000,
      earning: 1500,
      expenses: 800,
    };
  };
}

export const playerService = new PlayerService();
