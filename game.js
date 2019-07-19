//Create a fullscreen game
import GameCanvas   from './gloop/GameCanvas.js/index.js'
import Graphics     from './gloop/Graphics.js/index.js'
import GameLoop     from './gloop/GameLoop.js/index.js'

const canvas    = new GameCanvas()
const graphics  = new Graphics(canvas)
const loop      = new GameLoop()

loop.run()


graphics.fill()