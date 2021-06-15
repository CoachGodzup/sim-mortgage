import { PageParams } from "../../models/page";
import Chart from './chart';
import Ranking from "./ranking";

export default function Result(_: PageParams) {
  return (
    <div>
      <h1>Result</h1>
      <Ranking></Ranking>
    </div>
  )
}