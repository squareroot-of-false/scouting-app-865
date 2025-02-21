import { Checkbox as HeadlessCheckbox } from '@headlessui/react'
import { ChangeEventHandler, useState } from 'react'

type Props = {
    value?: boolean,
    onChange?: ((checked: boolean) => void) | undefined
};

export default function Checkbox(props: Props) {
  return (
    <HeadlessCheckbox
      checked={props.value}
      onChange={props.onChange}
      className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500"
    >
      {/* Checkmark icon */}
      <svg className="stroke-white opacity-0 group-data-[checked]:opacity-100" viewBox="0 0 14 14" fill="none">
        <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </HeadlessCheckbox>
  )
}