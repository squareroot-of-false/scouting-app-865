import { Menu, MenuButton, MenuItems, AnchorProps } from '@headlessui/react';
import { CSSProperties, JSX } from 'react';

type Props = {
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element),
    name: string,
    anchor: AnchorProps,
    className?: string,
    style?: CSSProperties
}

export default function Dropdown(props: Props) {
    return (
        <Menu>
            <MenuButton className={props.className} style={props.style}>{props.name}</MenuButton>
            <MenuItems anchor={props.anchor} className={props.className}>
                {props.children}
            </MenuItems>
        </Menu>
    );
}