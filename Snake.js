import GloopItem from "./gloop/GloopItem.js";

export default class Snake extends GloopItem{
    constructor(){
        super()
        this.body = []
    }

    draw(g){
        g.color('black')
        this.body.forEach( cell => g.rect(cell))
    }

    addToBody(cell){
        this.body.push(cell)
    }
}