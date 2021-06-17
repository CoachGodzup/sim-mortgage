import { useState } from "react";
import { PageParams } from "../models/page";
import { playerService } from "../service/player.service";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { createPlayer, removePlayer } from "../store/playerSlice";

export default function Player(_: PageParams) {
  const [name, setName] = useState("");

  const playerList = useAppSelector((state) => state.player);
  const playerLength = useAppSelector((state) => state.player.length);
  const dispatch = useAppDispatch();

  const submitHandler = (event: Event) => {
    event.preventDefault();
    const newPlayer = playerService.createPlayer(name);
    dispatch(createPlayer(newPlayer));
  };

  const onInputName = (e: Event) => {
    setName((e.target as HTMLInputElement).value);
  };

  const onElementClick = (e: Event, id: string) => {
    e.preventDefault();
    dispatch(removePlayer({ id: id }));
  };

  return (
    <section>
      <form onSubmit={submitHandler}>
        <div className="inputGroup">
          <label htmlFor="name">Nickname</label>
          <input onInput={onInputName} type="text" id="name" name="name" />
        </div>
        <button type="submit">Let me in!</button>
      </form>

      <ul>
        {playerList.map((elm) => (
          <li key={elm.id}>
            <a
              onClick={($event) => {
                onElementClick($event, elm.id);
              }}
            >
              {elm.name}
            </a>
          </li>
        ))}
      </ul>
      <pre>{playerLength}</pre>
    </section>
  );
}
