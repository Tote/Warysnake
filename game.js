import GameCanvas   from './gloop/GameCanvas.js'
import Graphics     from './gloop/Graphics.js'
import Gloop        from './gloop/Gloop.js'

import Board    from './Board.js'

const canvas    = new GameCanvas()
const graphics  = new Graphics(canvas)
const loop      = new Gloop(graphics)

const board = new Board(10,10,canvas.width(), canvas.height())
loop.item(board)

loop.run()