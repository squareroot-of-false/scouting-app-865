'use client'

import TextField from "./ui/TextField";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col m-4 w-full justify-center">
        <p className="text-lg text-center">Home</p>
      </div>
      <div className="flex flex-col m-4 w-min items-center">
        <TextField label="Scouter Name" inputName="scouter_name" className="p-2" />
        <div className="flex flex-row m-4">
          <TextField label="Team Number" type="number" inputName="team_number" className="px-4" inputClassName="w-20 text-center" />
          <TextField label="Match Number" type="number" inputName="match_number" className="px-4" inputClassName="w-20 text-center" />
        </div>
      </div>
    </div>
  );
}
