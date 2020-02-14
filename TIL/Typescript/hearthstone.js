"use strict";
// class Card{
//     public att: number;
//     public hp: number;
//     private cost: number;
// }
class Card {
    constructor(hero, mine) {
        if (hero) {
            return new Hero(mine);
            // this.att = Math.ceil(Math.random() * 2);
            // this.hp = Math.ceil(Math.random() * 5) + 25;
            // this.hero = true;
            // this.field = true;
        }
        else {
            this.att = Math.ceil(Math.random() * 5);
            this.hp = Math.ceil(Math.random() * 5);
            this.cost = Math.floor((this.att + this.hp) / 2);
        }
    }
}
const cardTest = new Card(true, true);
class Hero extends Card {
    constructor(mine) {
        super(true, mine);
        this.att = Math.ceil(Math.random() * 2);
        this.hp = Math.ceil(Math.random() * 5) + 25;
        this.hero = true;
        this.field = true;
    }
}
const opponent = {
    hero: document.getElementById('rival-hero'),
    deck: document.getElementById('rival-deck'),
    field: document.getElementById('rival-cards'),
    cost: document.getElementById('rival-cost'),
    deckData: [],
    heroData: null,
    fieldData: [],
    chosenCard: null,
    chosenCardData: null,
};
