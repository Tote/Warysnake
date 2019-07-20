//Create a fullscreen game
import GameCanvas   from './gloop/GameCanvas.js'
import Graphics     from './gloop/Graphics.js'
import Gloop     from './gloop/Gloop.js'
import Block        from './Block.js'

const canvas    = new GameCanvas()
const graphics  = new Graphics(canvas)
const loop      = new Gloop(graphics)


const block = new Block()
loop.item(block)



loop.run()