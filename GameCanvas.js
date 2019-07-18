export default class GameCanvas{
    constructor(){
        const SCROLLBAR_COMPENSATION = 10

        document.body.style.margin = 0
        document.body.style.padding = 0
        
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        
        canvas.width = document.documentElement.clientWidth - SCROLLBAR_COMPENSATION
        canvas.height = document.documentElement.clientHeight- SCROLLBAR_COMPENSATION
        
        document.body.appendChild(canvas)

        this.context = context
    }
}