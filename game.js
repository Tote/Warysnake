//Create a fullscreen game
import GameCanvas   from './GameCanvas.js'
import Graphics     from './Graphics.js'

const canvas = new GameCanvas()
const graphics = new Graphics(canvas)

graphics.fill()