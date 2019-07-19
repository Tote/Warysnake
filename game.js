//Create a fullscreen game
import GameCanvas   from './GameCanvas.js'
import Graphics     from './Graphics.js'
import GameLoop     from './GameLoop.js'

const canvas    = new GameCanvas()
const graphics  = new Graphics(canvas)
const loop      = new GameLoop()

loop.run()


graphics.fill()