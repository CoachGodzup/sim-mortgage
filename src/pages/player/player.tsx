import { route } from "preact-router";
import { useState } from "preact/hooks";
import { PageParams } from "../../models/page";
import { playerService } from "../../service/player.service";
import { rootStore } from "../../store/rootStore";

export default function Player(_: PageParams) {
  const [name, setName] = useState("");

  const onChange = (event) => {
    setName(event.target.data);
  };

  const onSubmit = (event: Event) => {
    event.preventDefault();
    const newPlayerData = playerService.createPlayer(name);
    rootStore.playerStore.createPlayer(newPlayerData);

    // route("/match");
  };

  return (
    <section>
      <form onSubmit={onSubmit}>
        <div className="inputGroup">
          <label htmlFor="name">Nickname</label>
          <input type="text" onChange={onChange} name="name" />
        </div>
      </form>
      <button type="submit">Let me in!</button>
    </section>
  );
}
