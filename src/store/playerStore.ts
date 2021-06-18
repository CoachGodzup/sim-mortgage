import { action, computed, makeObservable, observable } from "mobx";
import Player from "../models/player";

export interface IPlayerStore {
  playerList: Player[];
  playerListLength: number;
}

export class PlayerStore implements IPlayerStore {
  @observable playerList: Player[] = [];

  @computed get playerListLength(): number {
    return this.playerList.length;
  }

  @action createPlayer = (newPlayer: Player): void => {
    this.playerList = [...this.playerList, newPlayer];
  };

  @action removePlayer = (id: string): void => {
    this.playerList = this.playerList.filter((elm) => elm.id !== id);
  };
}
