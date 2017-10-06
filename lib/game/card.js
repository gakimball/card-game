export type CardAttributes = {|
  name: string,
  attack: number,
  health: number,
  type: 'minion',
|}

export default class Card {
  attrs: CardAttributes
  currentHealth: number

  constructor(attrs) {
    this.attrs = attrs;
    this.currentHealth = attrs.health;
  }
}
