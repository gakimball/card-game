import React from 'react';
import { times, sample } from 'lodash';
import sampleCards from '../lib/cards';
import Game from '../lib/game';
import Card from '../lib/game/card';
import Player from '../lib/game/player';
import Head from '../components/head';
import GameBoard from '../components/game';

const sampleDeck: Card[] = times(30, () => new Card(sample(sampleCards)));
const game: Game = new Game({
  players: [
    new Player(sampleDeck, 1),
    new Player(sampleDeck, 2),
  ],
});

export default () => (
  <div>
    <Head title="Home" />
    <GameBoard game={game} />
  </div>
);
