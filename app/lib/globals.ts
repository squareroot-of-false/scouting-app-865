export enum Game {
    _2025
}

var game = Game._2025;

export function currentGame() {
    return game;
}

export function setGame(newValue: Game) {
    console.log(`game = ${newValue}`);
    game = newValue;
}
