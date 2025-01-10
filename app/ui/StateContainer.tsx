// this file contains state for the app

'use client'

import { useState } from 'react';
import { Game } from "../lib/types";
import NavBar from "./NavBar";

export default function StateContainer({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const game = useState(Game._2025);
    const scouterName = useState("");
    const teamNumber = useState("");
    const matchNumber = useState("");

    return (
        <>
            <div>
                {children}
            </div>
            <div className="absolute bottom-0 w-full">
                <NavBar game={game[0]} />
            </div>
        </>
    );
}
