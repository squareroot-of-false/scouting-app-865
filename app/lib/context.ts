import { Game, GameData, GameData2025, games } from "./games";
import { AlliancePosition } from "./alliance";
import { createContext } from "react";

export class AppData {
    // settings
    game: Game = Game.Reefscape2025;
    flipField: boolean = false;

    // not cleared, universal
    scouterName: string = "";
    team: string = "";
    match: string = "";
    position: AlliancePosition = AlliancePosition.None;
    isTest: boolean = process.env.NODE_ENV == "development";

    // universal
    commentary: string = "";

    gameData: GameData = games[this.game].createData();

    public toString(): string {
        return ""; //return `{\n\tgame: ${games[this.game].name}\n\tscouterName: ${this.scouterName}\n\tteam: ${this.team}\n\tmatch: ${this.match}\n\tposition: ${this.position}}`
    }

    public getData() {
        switch (this.game) {
        case Game.Reefscape2025:
            return this.gameData as GameData2025;
        }
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

    public serialize(): object {
        const generalData = {
            "scouter": this.scouterName,
            "team": this.team,
            "match_number": this.match,
            "alliance_position": this.position,
            "is_test": this.isTest
        };

        const gameData = this.gameData?.serialize();

        return {
            ...generalData,
            "game_data": {
                ...gameData
            }
        };
    }
};

export const AppContext = createContext<AppData>(new AppData())
