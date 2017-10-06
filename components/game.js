// @flow

import React, { Component } from 'react';
import GameInst from '../lib/game';
import Card from './card';

type Props = {
  game: GameInst,
}

export default class Game extends Component<Props> {
  render() {
    const { game } = this.props;

    return (
      <div>
        {game.players.map(player => (
          <div className="player" key={player.id}>
            <div className="field">
              {player.field.loop((card, index) => <Card card={card} key={index} />, 5)}
            </div>
            <div className="hand">
              {player.hand.loop((card, index) => <Card card={card} key={index} />)}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
