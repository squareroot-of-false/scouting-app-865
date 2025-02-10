'use client'

import { useContext } from "react";
import { AppContext } from "./lib/context";
import TextField from "./ui/TextField";

export default function Page() {
  const context = useContext(AppContext);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col m-4 w-full justify-center">
        <p className="text-lg text-center">Home</p>
      </div>
      <div className="flex flex-col m-4 w-min items-center">
        <TextField label="Scouter Name" inputName="scouter_name" defaultValue={context.scouterName} onChange={(e) => context.scouterName = e.target.value} className="p-2" />
        <div className="flex flex-row m-4">
          <TextField label="Team Number" type="number" inputName="team_number" defaultValue={context.team} onChange={(e) => context.team = e.target.value} className="px-4" inputClassName="w-20 text-center" />
          <TextField label="Match Number" type="number" inputName="match_number" defaultValue={context.match} onChange={(e) => context.match = e.target.value} className="px-4" inputClassName="w-20 text-center" />
        </div>
      </div>
      <div>
        {/* put position here */}
      </div>
      <div>
        {/* put field here */}
      </div>
    </div>
  );
}
