import { XYPlot, LineSeries} from 'react-vis';
import { PlayerRank } from './result';



export interface ChartProps {
  players: PlayerRank[]
}
export default function Chart(props: ChartProps) {

  const generateRandomPlayerData = (min: number, max: number, turns: number = 30) => {
    const output: number[] = [];
    for(let i = 1; i < (turns - 1); i++ ) {
      output.push(Math.round((Math.random()*max) - min))
    }
    return [min, ...output, max];
  }
  
  const endResultMockedPlayers = props.players,[15000,  14253,  12321,  10223,  9432, 100, 5]
  const allPlayerData = endResultMockedPlayers.map(max => generateRandomPlayerData(0, max));



  return (
  <>
    <pre>
      <ul>
        {allPlayerData.map(data => {
          return <li>{JSON.stringify(data)}</li>
        })}
      </ul>
    </pre>
  </>)
}

