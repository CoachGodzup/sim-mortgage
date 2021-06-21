import { useState } from 'preact/hooks';
import { PageParams } from "../../models/page";
import { playerService } from "../../service/player.service";
import { playerStore } from "../../store/playerStore";

export default function PlayerPage(_: PageParams) {
  const [formValue, setFormValue] = useState({ name: ''});
  
  const onChange = (event: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    event.preventDefault();
    const input = (event.target as HTMLInputElement)
    setFormValue(fv => ({
      ...fv,
      name: input.value
    }));
  }

  const onSubmit = (event: Event) => {
    event.preventDefault();
    const form = (event.target as HTMLFormElement);
    playerStore.addPlayer(playerService.createPlayer(formValue.name));
    resetForm(form);
    // action : add player to match
    // route("/match");
  };

  const resetForm = (form: HTMLFormElement) => {
    form.reset();
    setFormValue({ name : '' });
  }

  return (
    <section>
      <form onSubmit={onSubmit}>
        <div className="inputGroup">
          <label htmlFor="name">Nickname</label>
          <input onChange={onChange} type="text" name="name" />
        </div>
        <button type="submit">Let me in!</button>
      </form>
      {/* <PlayerCounter></PlayerCounter> */}
    </section>
  );
}
