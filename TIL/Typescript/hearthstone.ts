interface Card{
    att: number;
    hp: number;
    mine: boolean;
    field: boolean;
    cost?: number;
    hero?: boolean;
}

// implements는 '구현한다'라고 생각하면 된다.
// 실제로 사용하면 Class, 구현먼하면 interface(implements)
class Hero implements Card{
    public att: number;
    public hp: number;
    public hero : boolean;
    public field: true;
    public mine: boolean;

    constructor(mine: boolean){
        this.mine = mine;
        this.att = Math.ceil(Math.random() * 2);
        this.hp = Math.ceil(Math.random() * 5) + 25;
        this.hero = true;
        this.field = true;
    }
}

class Sub implements Card{
    public att: number;
    public hp: number;
    public mine: boolean;
    public field: boolean = false;
    public cost: number;
    constructor(mine: boolean){
        this.mine = mine;
        this.att = Math.ceil(Math.random() * 5);
        this.hp = Math.ceil(Math.random() * 5);
        this.cost = Math.floor((this.att + this.hp) / 2);
    }
}

interface Player{
    hero: HTMLDivElement,
    deck: HTMLDivElement,
    field: HTMLDivElement,
    cost: HTMLDivElement,
    deckData: Card[],
    heroData?: Card | null,
    fieldData: Card[],
    chosenCard: HTMLDivElement | null,
    chosenCardData: Card | null,
}

const opponent: Player = {
    hero: document.getElementById('rival-hero') as HTMLDivElement,
    deck: document.getElementById('rival-deck') as HTMLDivElement,
    field: document.getElementById('rival-cards') as HTMLDivElement,
    cost: document.getElementById('rival-cost') as HTMLDivElement,
    deckData: [],
    heroData: null,
    fieldData: [],
    chosenCard: null,
    chosenCardData: null,
}

const me: Player = {
    hero: document.getElementById('rival-hero') as HTMLDivElement,
    deck: document.getElementById('rival-deck') as HTMLDivElement,
    field: document.getElementById('rival-cards') as HTMLDivElement,
    cost: document.getElementById('rival-cost') as HTMLDivElement,
    deckData: [],
    heroData: null,
    fieldData: [],
    chosenCard: null,
    chosenCardData: null,
};

const turnButton = document.getElementById('turn-btn') as HTMLButtonElement;
let turn = true; // true: 내 턴, false: 상대 턴

function initiate(){
    [opponent, me].forEach((item) => {
        item.deckData = [];
        item.heroData = null;
        item.fieldData = [];
        item.chosenCard = null;
        item.chosenCardData = null;
    });
    createDeck({mine: false, count: 5});
    createDeck({mine: true, count: 5});
    createHero({mine: false});
    createHero({mine: true});
    //redrawScreen({mine: true});
    //redrawScreen({mine: false});
}

function createDeck({mine, count}: {mine: boolean, count: number}){

}

function createHero({mine}: {mine: boolean}){
    const player = mine ? me: opponent;
    player.heroData = new Hero(mine);
}



















// 제네릭은 사용할때 타입을 정할 수 있게 해준다.
interface obj<T extends string | number>{
    add: (a: T, b: T) => T;
    remove?: (a: T, b: T) => T;
};

const ab: obj<number> = {
    add:(a, b) => a+b
};

const bc: obj<string> = {
    add:(a, b) => a+b
};

['a', 3, true].forEach(item => {
    
});