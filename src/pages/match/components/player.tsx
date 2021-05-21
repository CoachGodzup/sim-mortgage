import { Player } from "../../../models/player";

export interface PlayerPanelProps {
  player: Player
}

export default function PlayerPanel(props: PlayerPanelProps) {
  const avatarUrlGenerator = () => {
    return `https://eu.ui-avatars.com/api/?name=${props.name.replace(/s/, '+')}`;
  };

  return (
    <section>
      <img src={avatarUrlGenerator()} alt={props.player.name}></img>
      <pre>
        {JSON.stringify(props.player)}
      </pre>
    </section>
  )
}