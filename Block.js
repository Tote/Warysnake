import GloopItem from "./gloop/GloopItem.js";

export default class Block extends GloopItem{
    constructor(){
        super()
        this.x = 0
        this.y = 0
        this.w = 50
        this.h = 50
    }
    
    draw(graphics){
        graphics.rect(this)
    }
}