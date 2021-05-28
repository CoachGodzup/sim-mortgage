import { route } from 'preact-router';


export default function New() {

  const submitHandler = () => {
    route('/match');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
      <button type="submit">Start</button>
    </form>
  )
}