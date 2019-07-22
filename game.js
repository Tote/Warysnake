import GameCanvas   from './gloop/GameCanvas.js'
import Graphics     from './gloop/Graphics.js'
import Gloop        from './gloop/Gloop.js'
import Keys         from './gloop/Keys.js'

import Board        from './Board.js'
import BoardCell    from './BoardCell.js'
import Snake        from './Snake.js'

const canvas    = new GameCanvas()
const graphics  = new Graphics(canvas)
const loop      = new Gloop(graphics)
const keyboard  = new Keys()

const board = new Board(10,10,canvas.width(), canvas.height())
loop.item(board)

let fruit = new BoardCell(4,7, board)

const snake = new Snake()
snake.addToBody(new BoardCell(0,0,board))
snake.addToBody(new BoardCell(0,1,board))
snake.addToBody(new BoardCell(0,2,board))
snake.addToBody(new BoardCell(1,2,board))
snake.addToBody(new BoardCell(1,3,board))

loop.item(fruit)
loop.item(snake)

keyboard.press({
    when: 'ArrowUp',
    then: () => snake.goUp()
})
keyboard.press({
    when: 'ArrowRight',
    then: () => snake.goRight()
})
keyboard.press({
    when: 'ArrowDown',
    then: () => snake.goDown()
})
keyboard.press({
    when: 'ArrowLeft',
    then: () => snake.goLeft()
})

loop.rule({
    when: () => snake.eats(fruit),
    then: () => {
        snake.addToBody(fruit);
        fruit = BoardCell.random(board)
        loop.item(fruit)
    }
})
loop.run()