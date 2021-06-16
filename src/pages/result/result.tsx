import { PageParams } from "../../models/page";
import Chart from './chart';
import Ranking from "./ranking";

export interface PlayerRank {
  name: string;
  score: number;
}

export default function Result(_: PageParams) {
  const players = [
    {
      name: "Hin Xiaomi",
      score: 15000,
    },
    {
      name: "Thomas Santoku",
      score: 14253,
    },
    {
      name: "Gino Pilotino",
      score: 12321,
    },
    {
      name: "Marcus Embed",
      score: 10223,
    },
    {
      name: "Robert Capa",
      score: 9432,
    },
    {
      name: "Brambilla Fumagalli",
      score: 0,
    },
    {
      name: "Agenore Brumai",
      score: 0,
    }
  ]

  return (
    <div>
      <h1>Result</h1>
      <Ranking players={players}></Ranking>
    </div>
  )
}