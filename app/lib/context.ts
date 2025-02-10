import { AlliancePosition, Game } from "./types";
import { createContext } from "react";

export interface AppData {
    game: Game,
    scouterName: string,
    team: string,
    match: string,
    position?: AlliancePosition
};

export const AppContext = createContext<AppData>({
    game: Game._2025,
    scouterName: "",
    team: "",
    match: "",
    position: undefined,
})