import { observer } from "mobx-react-lite";
import { rootStore } from "../../store/rootStore";
import useContext from "preact";

export const playerCounter = observer(() => {
  return <div>{rootStore.playerStore.playerListLength}</div>;
});
