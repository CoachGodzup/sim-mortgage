import { route } from 'preact-router';
import { PageParams } from '../models/page';

export default function New(_: PageParams) {

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
        <button type="submit">Start</button>
      </form>
    </section>
  )
}