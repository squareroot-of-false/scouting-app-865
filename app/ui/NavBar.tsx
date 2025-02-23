'use client'

import {Game, games} from "../lib/games";

import Dropdown from "./Dropdown";
import Link from 'next/link';
import { MenuItem } from "@headlessui/react";
import { useContext } from "react";
import { AppContext } from "../lib/context";

export default function NavBar() {
    const context = useContext(AppContext);
    const links = games[context.game].links;
    // percentage of the nav bar each thing on it takes up
    const width = 100 / (links.length + 2) - 1; // 2 more than number of dynamic buttons for game chooser and home button, -1% just looks nice
    const buttonClass = "flex h-[48px] grow items-center justify-center rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
    return (
        <div className="flex flex-row justify-evenly">
            {/* game chooser dropdown, styled to blend in with other buttons */}
            <Dropdown
                name={games[context.game].name}
                anchor="top"
                className={buttonClass}
                style={{ width: `${width}%` }}
            >
                {Object.entries(games).map((game, key) => {
                    return (
                        <MenuItem key={game[1].name}>
                            <div>
                                <Link
                                    href={'/'}
                                    onClick={() => { context.game = key; }}
                                >
                                    <text>{game[1].name}</text>
                                </Link>
                            </div>
                        </MenuItem>
                    );
                })}
            </Dropdown>

            {/* nav bar buttons, Home is special, other ones are rendered dynamically */}

            <Link
                key="Home"
                href="/"
                className={buttonClass}
                style={{ width: `${width}%` }}
            >
                <text>Home</text>
            </Link>

            {links.map((link) => {
                //const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={buttonClass}
                        style={{ width: `${width}%` }}
                        onClick={_ => {
                            context.gameData = games[context.game].createData();
                        }}
                    >
                        <text>{link.name}</text>
                    </Link>
                );
            })}
        </div>
    );
}