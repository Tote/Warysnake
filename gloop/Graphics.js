import GloopItem from "./GloopItem.js";

export default class Graphics{
    constructor(output){
        this.output = output
        this.context = output.context
    }

    clear(){
        const w = this.output.width()
        const h = this.output.height()
        this.context.clearRect(0,0,w,h)
    }

    color( color ){
        this.context.fillStyle = color
    }

    rect(item){
        this.context.fillRect(
            item.x,
            item.y,
            item.w,
            item.h)
    }
}