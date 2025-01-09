'use client'

import { Game } from "../lib/globals";
import * as globals from "../lib/globals";

import Dropdown from "./Dropdown";
import Link from 'next/link';
import { MenuItem } from "@headlessui/react";

// Information about different games
const games = {
    [Game._2025]: {
        name: "Reefscape (2025)",
        // Defines NavBar buttons for this game
        links: [
            { name: 'Auto', href: '/2025/auto' },
            { name: 'Teleop', href: '/2025/teleop' },
            { name: 'Endgame', href: '/2025/endgame' },
            { name: 'Submit', href: '/2025/submit' }
        ]
    }
}

export default function NavBar() {
    var links = games[globals.currentGame()].links;
    const width = 100 / (links.length + 2) - 1; // 2 for game chooser and home button, -1 just looks nice
    const buttonClass = "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
    return (
        <div className="flex flex-row justify-evenly">
            {/* game chooser dropdown, styled to blend in with other buttons */}
            <Dropdown
                name={games[globals.currentGame()].name}
                className={buttonClass}
                style={{ width: `${width}%` }}
            >
                {Object.entries(games).map((game, key) => {
                    return (
                        <MenuItem key={game[1].name}>
                            <div>
                                <Link
                                    href={'/'}
                                    onClick={() => { globals.setGame(key); }}
                                >
                                    <p>{game[1].name}</p>
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
                <p className="hidden md:block">Home</p>
            </Link>

            {links.map((link) => {
                //const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={buttonClass}
                        style={{ width: `${width}%` }}
                    >
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </div>
    );
}