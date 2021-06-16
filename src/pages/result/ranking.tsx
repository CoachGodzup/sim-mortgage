import { PlayerRank } from "./result";

export interface RankingProps {
  players: PlayerRank[]
}
export default function Ranking(props: RankingProps) {
  return <div>
    <h2>Ranking (after 30 turns)</h2>
    <ol>
      {props.players.map(player => <li>{player.name} - {player.score} pts</li>)}
    </ol>
    <pre>
      {JSON.stringify(props)}
    </pre>
  </div>
}
