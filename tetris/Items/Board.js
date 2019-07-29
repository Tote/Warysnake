import GloopItem from "../gloop/GloopItem.js";
import BoardCell from "./BoardCell.js";

export default class Board extends GloopItem{
    constructor(rows, cols, width, height){
        super()
        this.rowCount   = rows
        this.colCount   = cols
        this.width      = width
        this.height     = height
        this.rowHeight  = height / rows
        this.colWidth   = width / cols
        this.walls = this.generateWalls()
        
    }
    draw(g){
        const c = g.context;
        c.beginPath()
        c.moveTo(0,0)
        for(let r = 0; r < this.height; r+=this.rowHeight){
            c.moveTo(0,r)
            c.lineTo(this.width,r)
        }
        for(let l = 0; l < this.width; l+=this.colWidth){
            c.moveTo(l,0)
            c.lineTo(l,this.height)
        }
        c.stroke()
    }

    generateWalls(){
        const walls = []
        for(let r = 0; r < this.rowCount; r++){
            walls.push(new BoardCell(-1,r,this))
            walls.push(new BoardCell(this.colCount,r,this))
        }
        for(let l = 0; l < this.colCount; l++){
            walls.push(new BoardCell(l,-1,this))
            walls.push(new BoardCell(l,this.rowCount,this))
        }

    return walls

    }

    xOfColumn(col){
        return col * this.colWidth
    }
    yOfRow(row){
        return row * this.rowHeight
    }
}