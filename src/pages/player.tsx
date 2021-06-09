import { route } from "preact-router";

export default function Player() {

  const submitHandler = (event: Event) => {
    event.preventDefault();
    // action : create player
    // action : add player to match

    route('/match');
  }

  return (
    <section>
      <form onSubmit={submitHandler}>
        <div className="inputGroup">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
      </form>
      <button type="submit">Let me in!</button>
    </section>
  )
}