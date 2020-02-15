"use strict";
// implements는 '구현한다'라고 생각하면 된다.
// 실제로 사용하면 Class, 구현먼하면 interface(implements)
class Hero {
    constructor(mine) {
        this.mine = mine;
        this.att = Math.ceil(Math.random() * 2);
        this.hp = Math.ceil(Math.random() * 5) + 25;
        this.hero = true;
        this.field = true;
    }
}
class Sub {
    constructor(mine) {
        this.field = false;
        this.mine = mine;
        this.att = Math.ceil(Math.random() * 5);
        this.hp = Math.ceil(Math.random() * 5);
        this.cost = Math.floor((this.att + this.hp) / 2);
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
const me = {
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
const turnButton = document.getElementById('turn-btn');
let turn = true; // true: 내 턴, false: 상대 턴
function initiate() {
    [opponent, me].forEach((item) => {
        item.deckData = [];
        item.heroData = null;
        item.fieldData = [];
        item.chosenCard = null;
        item.chosenCardData = null;
    });
    createDeck({ mine: false, count: 5 });
    createDeck({ mine: true, count: 5 });
    createHero({ mine: false });
    createHero({ mine: true });
    //redrawScreen({mine: true});
    //redrawScreen({mine: false});
}
function createDeck({ mine, count }) {
}
function createHero({ mine }) {
    const player = mine ? me : opponent;
    player.heroData = new Hero(mine);
};



const ab = {
    add: (a, b) => a + b
};
const bc = {
    add: (a, b) => a + b
};
['a', 3, true].forEach(item => {
});
