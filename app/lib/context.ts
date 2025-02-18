import { AlliancePosition, Game, games } from "./types";
import { createContext, useContext } from "react";

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
    }
};

export const AppContext = createContext<AppData>(new AppData())