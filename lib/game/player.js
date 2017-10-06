// @flow

import { times } from 'lodash';
import CardList from './card-list';
import Card from './card';

export default class Player {
  id: number
  deck: CardList
  hand: CardList
  discarded: CardList
  field: CardList

  constructor(deck: Card[], id: number) {
    this.id = id;
    this.deck = new CardList(deck);
    this.hand = new CardList();
    this.discarded = new CardList();
    this.field = new CardList();
  }

  drawCard(count: number = 1) {
    times(count, () => {
      const card: Card = this.deck.draw();
      this.hand.add(card);
    });
  }

  playCard(index: number) {
    if (this.hand.has(index)) {
      const card: Card = this.hand.remove(index);
      this.field.add(card);
    }
  }
}
