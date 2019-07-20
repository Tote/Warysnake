import GameCanvas   from './gloop/GameCanvas.js'
import Graphics     from './gloop/Graphics.js'
import Gloop        from './gloop/Gloop.js'

import Board        from './Board.js'
import BoardCell    from './BoardCell.js'
import Snake        from './Snake.js'

const canvas    = new GameCanvas()
const graphics  = new Graphics(canvas)
const loop      = new Gloop(graphics)

const board = new Board(10,10,canvas.width(), canvas.height())
loop.item(board)

const fruit = new BoardCell(4,7, board)

const snake = new Snake()
snake.addToBody(new BoardCell(0,0,board))
snake.addToBody(fruit)
loop.item(snake)

loop.run()