import Player from './player';

export default class Game {
  players: Player[]
  started: boolean

  constructor(opts: {| players: [Player, Player] |}) {
    this.players = opts.players;
    this.started = false;
  }

  startGame() {
    this.started = true;
    this.players.forEach((player) => {
      player.drawCard(3);
    });
  }

  startTurn(playerIndex: number) {
    const player: Player = this.players[playerIndex];

    player.drawCard();
  }

  endTurn(playerIndex: number) {
    const nextPlayer = playerIndex === 0 ? 1 : 0;

    this.startTurn(nextPlayer);
  }
}
