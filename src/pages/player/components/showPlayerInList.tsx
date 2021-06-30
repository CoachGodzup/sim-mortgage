import Player from "../../../models/player";

import './showPlayerInList.css'

export interface ShowPlayerInListProps {
  player: Player;
  onClick: ($event: Event, args: any) => void;
}

export default function ShowPlayerInList (props: ShowPlayerInListProps) {
  const elm = props.player;
  let icon = '';
  switch (elm.type) {
    case 'Human': icon = '🧑‍🦱'; break;
    case 'AI': icon = '🤖'; break;
  }

  return (
    <li key={elm.id}>
      <a
        onClick={($event) => {
          props.onClick($event, elm.id);
        }}
      >
        {icon}
        {elm.name}
      </a>
    </li>
  )
}
