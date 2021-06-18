import { PlayerStore } from "./playerStore";

export class RootStore {
  playerStore: PlayerStore;

  constructor() {
    this.playerStore = new PlayerStore();
  }
}

export const rootStore = new RootStore();
