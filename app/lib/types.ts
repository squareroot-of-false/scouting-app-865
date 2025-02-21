export enum Game {
    _2025,
}

type GameInfo = {
    name: string,
    links: {
        name: string,
        href: string
    }[],
    field: { normal: string, flipped: string }
}

// Information about different games
export const games: {[game in Game] : GameInfo} = {
    [Game._2025]: {
        name: "Reefscape (2025)",
        // Defines NavBar buttons for this game
        links: [
            { name: 'Auto', href: '/2025/auto' },
            { name: 'Teleop', href: '/2025/teleop' },
            { name: 'Endgame', href: '/2025/endgame' },
            { name: 'Submit', href: '/2025/submit' }
        ],
        field: { normal: '/2025/field.png', flipped: '/2025/field_flipped.png' }
    },
}

export enum AlliancePosition {
    None = "None",
    Red1 = "Red 1",
    Red2 = "Red 2",
    Red3 = "Red 3",
    Blue1 = "Blue 1",
    Blue2 = "Blue 2",
    Blue3 = "Blue 3"
}

export const RedPositions = [AlliancePosition.Red1, AlliancePosition.Red2, AlliancePosition.Red3];
export const BluePositions = [AlliancePosition.Blue1, AlliancePosition.Blue2, AlliancePosition.Blue3];
