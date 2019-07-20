import GloopItem from "./gloop/GloopItem.js";

export default class BoardCell extends GloopItem {
    constructor(x, y, board){
        super()
        this.cellX = x
        this.cellY = y
        this.x = board.xOfColumn(this.cellX)
        this.y = board.yOfRow(this.cellY)
        this.w = board.colWidth
        this.h = board.rowHeight
        this.board = board
    }
    draw(g){
        g.rect(this)
    }
}