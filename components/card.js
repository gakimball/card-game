import React, { Component } from 'react';
import CardClass from '../lib/game/card';

type Props = {
  card: CardClass,
}

export default class Card extends Component<Props> {
  render() {
    const { card } = this.props;

    return (
      <div className="card">
        {card && (
          <div className="card-body">
            <h4 className="card-title">{card.name}</h4>
            <h6 className="card-subtitle mb-2 text-muted">{card.type}</h6>
            <p className="card-text">Attack: {card.attack}</p>
            <p className="card-text">Health: {card.health}</p>
          </div>
        )}
      </div>
    );
  }
}
