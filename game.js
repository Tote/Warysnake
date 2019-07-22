import GameCanvas   from './gloop/GameCanvas.js'
import Graphics     from './gloop/Graphics.js'
import Gloop        from './gloop/Gloop.js'
import Keys         from './gloop/Keys.js'

import Board        from './Items/Board.js'
import BoardCell    from './Items/BoardCell.js'
import Snake        from './Items/Snake.js'

const canvas    = new GameCanvas()
const graphics  = new Graphics(canvas)
const loop      = new Gloop(graphics)
const keyboard  = new Keys()

const board = new Board(10,10,canvas.width(), canvas.height())
loop.item(board)

let fruit = BoardCell.random(board)
fruit.color = 'red'

const snake = new Snake()
snake.addToBody(new BoardCell(0,0,board))
snake.addToBody(new BoardCell(1,0,board))
snake.addToBody(new BoardCell(2,0,board))
snake.goRight()

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
        fruit.color = 'red'
        loop.item(fruit)
        snake.speed++
    }
})

loop.rule({
    when: () => snake.eats(board.walls),
    then: () => snake.stop()
})

loop.rule({
    when: () => snake.eats(snake.body),
    then: () => snake.stop()
})
loop.run()