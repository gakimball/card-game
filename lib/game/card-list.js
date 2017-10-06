// @flow

import Card from './card';

export default class CardList {
  cards: Card[]

  constructor(cards: Card[] = []) {
    this.cards = cards;
  }

  draw(): Card {
    return this.cards.pop();
  }

  get(index: number) {
    return this.cards[index];
  }

  add(card: Card) {
    this.cards.push(card);
  }

  set(card: Card, index: number) {
    this.cards[index] = card;
  }

  remove(index: number): Card {
    const [card: Card] = this.cards.splice(index, 1);
    return card;
  }

  has(index: number): boolean {
    return typeof this.cards[index] !== 'undefined';
  }

  loop(cb: (card: Card, index: number) => any, count: number = this.cards.length) {
    for (let i = 0; i < count; i++) {
      cb(this.cards[i], i);
    }
  }
}
