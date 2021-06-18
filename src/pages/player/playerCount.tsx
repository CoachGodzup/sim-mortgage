import { observer } from "mobx-react-lite";
import { PlayerStore } from "../../store/playerStore";

export interface PlayerCountParams {
  playerStore: PlayerStore;
}

export const PlayerCount = observer((params: PlayerCountParams) => {
  return <div>{params.playerStore.playerListLength}</div>;
});
