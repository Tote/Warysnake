import GloopItem from "../gloop/GloopItem.js";

export default class Snake extends GloopItem{
    constructor(){
        super()
        this.body = []
        this.vx = 1
        this.vy = 0
        this.speed = 0
        this.maxSpeed = 20
        this.skippedFrames = 0
        this.color = 'black'
    }

    draw(g){
        this.body.forEach( cell => cell.draw(g))
    }

    next(t){
        if( this.skippedFrames <= this.maxSpeed - this.speed ){
            this.skippedFrames++
        }else if(this.vx == 0 && this.vy == 0){
            return
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
        cell.color = this.color
        this.body.unshift(cell)
    }

    eats( target ){
        if( Array.isArray(target) ){
            return target.some( cell => this.eats(cell))
        }
        const head = this.body[0]
        return (
            target.cellX == head.cellX + this.vx
            && target.cellY == head.cellY + this.vy)
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

    stop(){
        this.vx = 0
        this.vy = 0
    }
}