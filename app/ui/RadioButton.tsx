'use client'

import { Field, Label, Radio } from "@headlessui/react";

type Props = {
    value: string,
    label: string,
    radioClass?: string,
    innerClass?: string,
    labelClass?: string,
    className?: string
};

export default function RadioButton(props: Props) {
    return (
        <Field className={`flex flex-row ${props.className}`}>
            <Radio
                value={props.value}
                className={`group flex size-5 items-center justify-center rounded-full border bg-gray-600 data-[checked]:bg-blue-400 mx-2 ${props.radioClass}`}
            >
                <span className={`invisible size-2 rounded-full bg-gray-900 group-data-[checked]:visible ${props.innerClass}`} />
            </Radio>
            <Label className={props.labelClass}>{props.label}</Label>
        </Field>
    );
}