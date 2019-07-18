export default class GameCanvas{
    constructor(){
        this.canvas  = this.createCanvas()
        this.context = this.canvas.getContext('2d')
    }

    createCanvas(){
        //TODO: Remove document dependencies
        const SCROLLBAR_COMPENSATION = 10

        document.body.style.margin = 0
        document.body.style.padding = 0
        
        const canvas = document.createElement('canvas')
        canvas.width = document.documentElement.clientWidth - SCROLLBAR_COMPENSATION
        canvas.height = document.documentElement.clientHeight- SCROLLBAR_COMPENSATION
        
        document.body.appendChild(canvas)

        return canvas
    }

    height(){
        return this.canvas.height
    }

    width(){
        return this.canvas.width
    }
}