import { AlliancePosition, Game, games } from "./types";
import { createContext, useContext } from "react";

export interface AppData {
    game: Game,
    scouterName: string,
    team: string,
    match: string,
    position?: AlliancePosition
    l1CoralTeleop: number
    l2CoralTeleop: number
    l3CoralTeleop: number
    l4CoralTeleop: number
    algaeNetTeleop: number
    algaePrcsrTeleop: number
    foul: number
    techFoul: number
    defense: boolean
};

export const AppContext = createContext<AppData>({
    game: Game._2025,
    scouterName: "",
    team: "",
    match: "",
    position: undefined,
    l1CoralTeleop: 0,
    l2CoralTeleop: 0,
    l3CoralTeleop: 0,
    l4CoralTeleop: 0,
    algaeNetTeleop: 0,
    algaeProcessorTeleop: 0,
    foul: 0,
    techFoul: 0,
    defense: false,
})

export class AppData {
    game: Game = Game._2025;
    scouterName: string = "";
    team: string = "";
    match: string = "";
    position: AlliancePosition = AlliancePosition.None;
    commentary: string = "";

    public toString(): string {
        return `{\n\tgame: ${games[this.game].name}\n\tscouterName: ${this.scouterName}\n\tteam: ${this.team}\n\tmatch: ${this.match}\n\tposition: ${this.position}}`
    }

    public clear() {
        this.position = AlliancePosition.None;
        this.team = "";
        this.match = "";
        this.commentary = "";
        this.l1CoralTeleop = 0;
        this.l2CoralTeleop = 0;
        this.l3CoralTeleop = 0;
        this.l4CoralTeleop = 0;
        this.algaeNetTeleop = 0;
        this.algaeProcessorTeleop = 0;
        this.foul = 0;
        this.techFoul = 0;
        this.defense = false;
    }
};

export const AppContext = createContext<AppData>(new AppData())
