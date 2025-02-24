import { Checkbox as HeadlessCheckbox } from '@headlessui/react'
import { useState } from 'react';

type Props = {
  value?: boolean,
  onChange?: ((checked: boolean) => void) | undefined,
  children?: string,
  className?: string,
  labelClassName?: string
};

export default function Checkbox(props: Props) {
  let [value, setValue] = useState(props.value);
  let onChange = (checked: boolean) => {
      if (props.onChange != undefined) {
          console.log(checked);
          props.onChange(checked); setValue(checked);
      }
  };
  return (
    <div className={`flex flex-row ${props.className}`}>
      <HeadlessCheckbox
        checked={value}
        onChange={onChange}
        className="group block size-4 rounded border bg-gray-600 data-[checked]:bg-blue-500"
      >
        {/* Checkmark icon */}
        <svg className="stroke-white opacity-0 group-data-[checked]:opacity-100" viewBox="0 0 14 14" fill="none">
          <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </HeadlessCheckbox>
      <div className={`px-2 ${props.labelClassName}`}>
        {props.children}
      </div>
    </div>
  )
}