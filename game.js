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
snake.color = 'green'
snake.addToBody(new BoardCell(0,0,board))
snake.addToBody(new BoardCell(1,0,board))
snake.addToBody(new BoardCell(2,0,board))
snake.goRight()

const snake2 = new Snake()
snake2.color = 'purple'
snake2.addToBody(new BoardCell(9,9,board))
snake2.addToBody(new BoardCell(8,9,board))
snake2.addToBody(new BoardCell(7,9,board))
snake2.goLeft()

loop.item(fruit)
loop.item(snake)
loop.item(snake2)

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

keyboard.press({
    when: 'w',
    then: () => snake2.goUp()
})
keyboard.press({
    when: 'd',
    then: () => snake2.goRight()
})
keyboard.press({
    when: 's',
    then: () => snake2.goDown()
})
keyboard.press({
    when: 'a',
    then: () => snake2.goLeft()
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
    when: () => snake2.eats(fruit),
    then: () => {
        snake2.addToBody(fruit);
        fruit = BoardCell.random(board)
        fruit.color = 'red'
        loop.item(fruit)
        snake2.speed++
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

loop.rule({
    when: () => snake2.eats(board.walls),
    then: () => snake2.stop()
})

loop.rule({
    when: () => snake2.eats(snake2.body),
    then: () => snake2.stop()
})
loop.run()