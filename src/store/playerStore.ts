import { action, computed, observable } from "mobx";
import Player from "../models/player";

export class PlayerStore {
  @observable list: Player[] = [];

  @computed get length():number {
    return this.list.length;
  } 

  @action addPlayer = (newPlayer: Player) => {
    this.list.push(newPlayer);
    console.log('addPlayer: ', this.list);
  }

  @action removePlayer = (id: string) => {
    this.list = this.list.filter(pl => pl.id !== id);
    console.log('removePlayer: ', this.list);
  }
}

export const playerStore = new PlayerStore();
