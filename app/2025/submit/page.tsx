'use client'

import { AppContext } from "@/app/lib/context";
import Button from "@/app/ui/Button";
import TextField from "@/app/ui/TextField";
import { useContext } from "react";

export default function Page() {
  const context = useContext(AppContext);
  return (
		<div className="flex flex-col justify-center items-center">
			<div className="flex flex-col m-4 w-full justify-center">
				<p className="text-lg text-center">Submit</p>
			</div>
      <div className="flex flex-col m-4 w-min justify-center">
        <TextField label="Commentary" inputName="submit-commentary" className="m-2" defaultValue={context.commentary} onChange={e => context.commentary = e.target.value} />
        <Button className="m-2">Submit</Button>
      </div>
    </div>
  );
}
