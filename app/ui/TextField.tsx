'use client'

import { Field, Input, Label } from "@headlessui/react";
import { JSX } from "react"

type Props = {
    children?: string | JSX.Element | JSX.Element[],
    inputName: string,
    label: string,
    type?: "text" | "number",
    className?: string,
    labelClassName?: string,
    inputClassName?: string
}

export default function TextField(props: Props) {
    return (
        <Field className={`flex flex-col justify-center w-min ${props.className}`}>
            <Label className={`text-center ${props.labelClassName}`}>{props.label}</Label>
            <Input name={props.inputName} type={props.type} className={`border-b-2 border-b-gray-500 bg-transparent ${props.inputClassName}`} />
            {props.children}
        </Field>
    );
}
