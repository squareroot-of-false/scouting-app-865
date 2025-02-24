'use client'

import { AppContext } from "@/app/lib/context";
import Checkbox from "@/app/ui/Checkbox";
import ScoreCounter from "@/app/ui/ScoreCounter";
import TextField from "@/app/ui/TextField";
import { useContext } from "react";

export default function EndgamePage() {
  let context = useContext(AppContext);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col m-4 w-full justify-center">
        <p className="text-lg text-center">Endgame</p>
      </div>
      <div className="flex flex-col m-4 w-full items-center">
        <Checkbox className="m-4" value={context.getData().park} onChange={checked => context.getData().park = checked}>Park</Checkbox>
        <Checkbox className="m-4" value={context.getData().shallow} onChange={checked => context.getData().shallow = checked}>Shallow</Checkbox>
        <Checkbox className="m-4" value={context.getData().deep} onChange={checked => context.getData().deep = checked}>Deep</Checkbox>
        <TextField inputName="time-climbed-at" className="m-4" type="number" value={context.getData().timeClimbedAt.toString()} onChange={e => context.getData().timeClimbedAt = e.target.valueAsNumber} inputClassName="w-30 text-center">Time climbed at</TextField>
      </div>
    </div>
  );
}
