'use client'

import { ChangeEventHandler, JSX, useState } from "react"
import Button from "./Button"

type Props = {
    children?: string | JSX.Element | JSX.Element[],
    className?: string,
    initialValue: number,
    minValue?: number,
    maxValue?: number,
    increment?: number,
    onChange?: ((change: number) => void) | undefined,
}

export default function ScoreCounter(props: Props) {
    let [value, setValue] = useState(props.initialValue);
    let getIncrement = (): number => {
        return props.increment != undefined ? props.increment : 1;
    };
    let clamp = (value: number): number => {
        let minValue = props.minValue != undefined ? props.minValue : 0;
        let maxValue = props.maxValue != undefined ? props.maxValue : Infinity;
        return Math.max(minValue, Math.min(value, maxValue));
    };
    let onChange = (change: number) => {
        if (props.onChange != undefined) {
            props.onChange(change); setValue(clamp(value + change));
        }
    };

    return (
        <div className={`flex flex-col items-center ${props.className}`}>
            {props.children}
            <div className="flex flex-row">
                <Button onClick={() => onChange(-Math.abs(-getIncrement()))}>-</Button>
                <p className="mx-2">{value}</p>
                <Button onClick={() => onChange(Math.abs(getIncrement()))}>+</Button>
            </div>
        </div>
    )
}
