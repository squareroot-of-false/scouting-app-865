export enum Game {
    _2025,
}

export interface GameData {
    clear(): void,
    serialize(): {}
};

export class GameData2025 implements GameData {
    teleopCoralLvl1: number = 0;
    teleopCoralLvl2: number = 0;
    telepoCoralLvl3: number = 0;
    teleopCoralLvl4: number = 0;
    teleopAlgaeNet: number = 0;
    teleopAlgaeProcessor: number = 0;
    fouls: number = 0;
    techFouls: number = 0;
    defense: boolean = false;

    clear(): void {
        this.teleopCoralLvl1 = 0;
        this.teleopCoralLvl2 = 0;
        this.telepoCoralLvl3 = 0;
        this.teleopCoralLvl4 = 0;
        this.teleopAlgaeNet = 0;
        this.teleopAlgaeProcessor = 0;
        this.fouls = 0;
        this.techFouls = 0;
        this.defense = false;
    }

    serialize(): {} {
        return {
            "teleop": {
                "coralLevel1": this.teleopCoralLvl1,
                "coralLevel2": this.teleopCoralLvl2,
                "coralLevel3": this.telepoCoralLvl3,
                "coralLevel4": this.teleopCoralLvl4,
                "algaeNet": this.teleopAlgaeNet,
                "algaeProcessor": this.teleopAlgaeProcessor,
                "fouls": this.fouls,
                "techFouls": this.techFouls,
                "defense": this.defense
            },
        }
    }
}

type GameInfo = {
    // the name of the game in the dropdown
    name: string,

    // creates the game-specific data for the context (gets sent to google sheets)
    createData(): GameData,

    // buttons in the navbar
    links: {
        name: string,
        href: string
    }[],

    // field images
    field: { normal: string, flipped: string },
}

// Information about different games
export const games: { [game in Game]: GameInfo } = {
    [Game._2025]: {
        name: "Reefscape (2025)",
        createData() {
            return new GameData2025();
        },
        links: [
            { name: 'Auto', href: '/2025/auto' },
            { name: 'Teleop', href: '/2025/teleop' },
            { name: 'Endgame', href: '/2025/endgame' },
            { name: 'Submit', href: '/2025/submit' }
        ],
        field: { normal: '/2025/field.png', flipped: '/2025/field_flipped.png' }
    },
}