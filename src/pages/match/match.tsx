import Match from "../../models/match";
import Mortgage from "../../models/mortgage";
import Player from "../../models/player";
import PlayerPanel from "./components/playerPanel";
import MortgagePanel from './components/mortgagePanel';
import ActionPanel from './components/actionPanel';
import { PageParams } from "../../models/page";

import './match.css';

export default function Match(_: PageParams) {
  const _match: Match = {
    id: 'MOCK_MATCH',
    activePlayerIndex: 0,
    turn: 0,
    maxTurn: 35,
    house: {
      value: 300000
    },
    euriborRate: 0.5,
    startingBudget: 50000,
    availableMortgages: [{
      id: 1,
      turn: 1,
      name: 'Strozz 1000 Plus',
      bank: 'Concordia',
      durationTurns: 30,
      housePercentage: 80,
      rate: {
        type: 'FIX',
        value: 0.2
      }
    }, {
      id: 2,
      turn: 1,
      name: 'Make 100 Green of you',
      bank: 'San Paganino',
      durationTurns: 20,
      housePercentage: 100,
      rate: {
        type: 'FIX',
        value: 1
      }
    }, {
      id: 3,
      turn: 1,
      name: 'Money Burner 9000',
      bank: 'Banco dei Pascoli Verdi',
      durationTurns: 20,
      housePercentage: 80,
      rate: {
        type: 'FIX',
        value: 0.5
      }
    }],
    players: [{
      id: 'abc',
      name: 'Brambilla Fumagalli',
      budget: 50000,
      earning: 1500,
      expenses: 800,
      type: 'Human'
    }, {
      id: 'def',
      name: 'Agenore Brumai',
      budget: 50000,
      earning: 1500,
      expenses: 800,
      type: 'Human'
    }]
  }

  const mockPlayer = (): Player => {
    return {
      id:'bot',
      name: 'Bernie The Robot',
      budget: 50000,
      earning: 1500,
      expenses: 800,
      type: 'AI'
    }
  }

  /*
  const mockMortgage = (): Mortgage => {
    return {
      name: 'Strozz 1000 Plus',
      bank: 'Concordia',
      durationTurns: 30,
      housePercentage: 80,
      rate: {
        type: 'FIX',
        value: 0.2
      }
    }
  }
  */

  const computeExpenses = () => {}
  const changeEuribor = () => {}

  const changePlayer = () => {
    if(_match.activePlayerIndex === _match.players.length - 1) {
      endTurn();
    } else {
      _match.activePlayerIndex++;
    }
  }

  const endTurn = () => {
    if(_match.turn === _match.maxTurn) {
      endGame();
    } else {
      computeExpenses();
      changeEuribor();
      _match.activePlayerIndex = 0;
    }
  }

  const endGame = () => {

  }

  return (
    <main>
      <h1>Match</h1>
      <div className="matchContainer">
        <div className="actionContainer">
          <PlayerPanel player={_match.players[0]}></PlayerPanel>
          <ActionPanel></ActionPanel>
        </div>
        <div className="mortgageContainer">
          <MortgagePanel mortgageList={_match.availableMortgages}></MortgagePanel>
        </div>
      </div>
    </main>
  );
}
