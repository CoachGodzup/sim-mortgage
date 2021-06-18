import Player from "../models/player";

class PlayerStore {
  playerList: Player[] = [];

  public createPlayer = (newPlayer: Player): void => {
    this.playerList = [...this.playerList, newPlayer];
  };

  public removePlayer = (id: string): void => {
    this.playerList = this.playerList.filter((elm) => elm.id !== id);
  };
}

export const playerStore = new PlayerStore();
