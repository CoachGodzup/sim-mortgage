import Player from "../../../models/player";

export interface PlayerPanelProps {
  player: Player
}

export default function PlayerPanel(props: PlayerPanelProps) {
  const avatarUrlGenerator = () => {
    return `https://eu.ui-avatars.com/api/?name=${props.player.name.replace(/s/, '+')}`;
  };

  return (
    <section>
      <div>
        <img src={avatarUrlGenerator()} alt={props.player.name}></img>
      </div>
      <p>{props.player.name}</p>
      <p>Budget: §{props.player.budget}</p>
      <p>Earning monthly: §{props.player.earning}</p>
      <p>Expenses monthly: §{props.player.expenses}</p>
    </section>
  )
}