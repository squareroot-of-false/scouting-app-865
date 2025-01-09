import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { CSSProperties, JSX } from 'react';

type Props = {
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element),
    name: string,
    className?: string,
    style?: CSSProperties
  }

export default function Dropdown(props: Props) {
    return (
        <Menu>
            <MenuButton className={props.className} style={props.style}>{props.name}</MenuButton>
            <MenuItems anchor="top" className="bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                {props.children}
            </MenuItems>
        </Menu>
    );
}