import GloopItem from "./gloop/GloopItem.js";

export default class Snake extends GloopItem{
    constructor(){
        super()
        this.body = []
        this.vx = 1
        this.vy = 0
        this.speed = 0
        this.maxSpeed = 10
        this.skippedFrames = 0
    }

    draw(g){
        this.body.forEach( cell => cell.draw(g))
    }

    next(t){
        if( this.skippedFrames <= this.maxSpeed - this.speed ){
            this.skippedFrames++
        }else{
            this.skippedFrames=0
            const tail = this.body.pop()
            const head = this.body[0]
            tail.cellX = head.cellX + this.vx
            tail.cellY = head.cellY + this.vy
            this.body.unshift(tail)
            
            this.body.forEach( cell => cell.next())
        }
    }

    addToBody(cell){
        this.body.unshift(cell)
    }

    eats( cell ){
        const head = this.body[0]
        const eats =
            cell.cellX == head.cellX + this.vx
            && cell.cellY == head.cellY + this.vy

            console.log(`eats: ${eats}`)
        return eats
    }

    goUp(){
        this.vx = 0
        this.vy = -1
    }

    goRight(){
        this.vx = 1
        this.vy = 0
    }

    goDown(){
        this.vx = 0
        this.vy = 1
    }

    goLeft(){
        this.vx = -1
        this.vy = 0
    }

}