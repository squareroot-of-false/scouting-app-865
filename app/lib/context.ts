import { AlliancePosition, Game, games } from "./types";
import { createContext, useContext } from "react";

export class AppData {
    game: Game = Game._2025;
    scouterName: string = "";
    team: string = "";
    match: string = "";
    position: AlliancePosition = AlliancePosition.None;
    commentary: string = "";
    l1CoralTeleop: number = 0;
    l2CoralTeleop: number = 0;
    l3CoralTeleop: number = 0;
    l4CoralTeleop: number = 0;
    algaeNetTeleop: number = 0;
    algaeProcessorTeleop: number = 0;
    foul: number = 0;
    techFoul: number = 0;
    defense: boolean = false;

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
