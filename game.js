//Create a fullscreen game
import GameCanvas   from './gloop/GameCanvas.js'
import Graphics     from './gloop/Graphics.js'
import GameLoop     from './gloop/GameLoop.js'
import Block        from './Block.js'

const canvas    = new GameCanvas()
const graphics  = new Graphics(canvas)
const loop      = new GameLoop()


const block = new Block()
block.draw(graphics)


let speed = 1

loop.rule({
    when: () => true,
    then: () => block.x += speed
})
loop.rule({
    when: () => block.x+block.w > canvas.width(),
    then: () => speed = -10
})
loop.rule({
    when: () => block.x < 0,
    then: () => speed = 10
})
loop.rule({
    when: () => true,
    then: () => graphics.clear()
})
loop.rule({
    when: () => true,
    then: () => block.draw(graphics)
})
loop.run()