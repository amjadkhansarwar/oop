class Card{
    static  suits = ["spades", "diamonds", "clubs", "hearts"];
    static  values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    constructor( value, suite, faceDown){
        this.value= value
        this.suite = suite
        this.faceDown = faceDown
    }
    getValue(){
        return this.vlaue
    }
    setValue(value){
         this.value = value
    }
    getSuit(){
        return this.value
    }
    setSuite(suite){
        this.suite = suite
    }
    getFaceDown(){
        return this.faceDown
    }
    setFaceDown(faceDown){
        this.faceDown = faceDown
    }

}
class Deck{
    constructor(){
        this.card = []
    }
    addCard(card){
        this.card.push(card)
    }
    getCard(){
        return this.card
    }
    draCard(){
        this.card.pop()
        return this.card
    }
    shuffle(){

        const shuffledArray = this.card.sort((a, b) => 0.5 - Math.random());
        return shuffledArray
    }
    static generateDeck(){
        const suits =  Card.suits
        const value = Card.values
        const deck = new Deck
        for(let i = 0; i < suits.length; i++)
        {
            for(let x = 2; x < value.length; x++)
            {
                let card = {Value: value[x], Suit: suits[i]};
                deck.addCard(card);
            }
        }
        return deck
    }
}
 
 console.log((Deck.generateDeck()))
// deck.addCard(new Card(1,'black','diamonds'))
// deck.addCard(new Card(2,'red','spades'))
// deck.addCard(new Card(3,'black','heart'))
// deck.addCard(new Card(4,'red','clubs'))
// console.log(deck.getCard())
// //console.log(deck.draCard())
// console.log(deck.shuffle())