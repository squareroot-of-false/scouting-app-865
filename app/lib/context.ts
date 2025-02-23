import { Game, GameData } from "./games";
import { AlliancePosition } from "./alliance";
import { createContext, useContext } from "react";

export class AppData {
    // settings
    game: Game = Game._2025;
    flipField: boolean = false;

    // not cleared, universal
    scouterName: string = "";
    team: string = "";
    match: string = "";
    position: AlliancePosition = AlliancePosition.None;

    // universal
    commentary: string = "";

    gameData?: GameData;

    public toString(): string {
        return ""; //return `{\n\tgame: ${games[this.game].name}\n\tscouterName: ${this.scouterName}\n\tteam: ${this.team}\n\tmatch: ${this.match}\n\tposition: ${this.position}}`
    }

    public clear() {
        this.position = AlliancePosition.None;
        this.team = "";
        this.match = "";
        this.commentary = "";
        if (this.gameData != undefined) {
            this.gameData.clear();
        }
    }

    public serialize(): {} {
        const generalData = {
            "game": this.game,
            "scouter": this.scouterName,
            "team": this.team,
            "matchNumber": this.match,
            "alliancePosition": this.position
        };

        const gameData = this.gameData?.serialize();

        return {
            ...generalData,
            ...gameData
        };
    }
};

export const AppContext = createContext<AppData>(new AppData())
