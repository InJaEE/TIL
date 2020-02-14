// class Card{
//     public att: number;
//     public hp: number;
//     private cost: number;
// }

class Card{
    protected att?: number;
    protected hp?: number;
    private cost?: number;
    protected mine?: boolean;

    constructor(hero: boolean, mine: boolean){
        if(hero){
            return new Hero(mine);
            // this.att = Math.ceil(Math.random() * 2);
            // this.hp = Math.ceil(Math.random() * 5) + 25;
            // this.hero = true;
            // this.field = true;
        } else{
            this.att = Math.ceil(Math.random() * 5);
            this.hp = Math.ceil(Math.random() * 5);
            this.cost = Math.floor((this.att + this.hp) / 2);
        }
    }
}

const cardTest = new Card(true, true);

class Hero extends Card{
    private hero: boolean;
    private field: boolean;

    constructor(mine: boolean){
        super(true, mine);
        this.att = Math.ceil(Math.random() * 2);
        this.hp = Math.ceil(Math.random() * 5) + 25;
        this.hero = true;
        this.field = true;
    }

}

interface Play{
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

const opponent: Play = {
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
