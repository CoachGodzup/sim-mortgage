import { route } from 'preact-router';
import { useDispatch, useSelector } from 'react-redux';
import { PageParams } from '../models/page';
import { addPlayer } from '../store/playerSlice';

export default function New(_: PageParams) {

  const playerStore = useSelector((state) => state.player);
  const dispatch = useDispatch();

  const submitHandler = () => {
    route('/player');
  }

  return (
    <section class="action">
      <form onSubmit={submitHandler}>
        <div className="input-group">
          <label for="playerNumber">Number of players</label>
          <div className="form-group">
            <label>
              <input type="radio" name="playerNumber" value="1"/>1
            </label>
            <label>
              <input type="radio" name="playerNumber" value="2"/>2
            </label>
            <label>
              <input type="radio" name="playerNumber" value="3"/>3
            </label>
            <label>
              <input type="radio" name="playerNumber" value="4"/>4
            </label>
          </div>
        </div>

        <form onSubmit={() => dispatch(addPlayer(_, {nickname: 'ginopino'}))}>
          <input placeholder="nickname"></input>
          <button type="submit">Add player</button>
        </form>


        <button type="submit">Start</button>
      </form>
    </section>
  )
}