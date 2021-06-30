import { useState } from "react";
import { PageParams } from "../../models/page";
import { PlayerType } from "../../models/player";
import { playerService } from "../../service/player.service";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { createPlayer, removePlayer } from "../../store/playerSlice";
import ShowPlayerInList from "./components/showPlayerInList";

import './player.css'

export default function Player(_: PageParams) {
  const [name, setName] = useState('');
  const [type, setType] = useState<PlayerType>('Human');

  const playerList = useAppSelector((state) => state.player);
  const playerLength = useAppSelector((state) => state.player.length);
  const dispatch = useAppDispatch();

  const submitHandler = (event: Event) => {
    event.preventDefault();
    const newPlayer = playerService.createPlayer(name, type);
    dispatch(createPlayer(newPlayer));
  };

  const onInputName = (e: Event) => {
    setName((e.target as HTMLInputElement).value);
  };

  const onInputType = (e: Event) => {
    setType((e.target as HTMLInputElement).value as PlayerType);
  }

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
        <div className="inputGroup">
          <label htmlFor="name">Type</label>
          <input onInput={onInputType} type="radio" name="type" value="Human" /> Human
          <input onInput={onInputType} type="radio" name="type" value="AI" /> CPU
        </div>



        <button type="submit">Let me in!</button>
      </form>

      <ul>
        {playerList.map((elm) => (
          <ShowPlayerInList player={elm} onClick={onElementClick}></ShowPlayerInList>
        ))}
      </ul>
      <pre>{playerLength}</pre>
    </section>
  );
}
