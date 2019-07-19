//Create a fullscreen game
import GameCanvas   from './gloop/GameCanvas.js'
import Graphics     from './gloop/Graphics.js'
import GameLoop     from './gloop/GameLoop.js'

const canvas    = new GameCanvas()
const graphics  = new Graphics(canvas)
const loop      = new GameLoop()

loop.run()


graphics.fill()