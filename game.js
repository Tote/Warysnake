import GameCanvas   from './gloop/GameCanvas.js'
import Graphics     from './gloop/Graphics.js'
import Gloop        from './gloop/Gloop.js'

import Board        from './Items/Board.js'
import BoardCell    from './Items/BoardCell.js'
import Snake        from './Items/Snake.js'
import BrowserEvent from './gloop/BrowserEvent.js';

const canvas    = new GameCanvas()
const graphics  = new Graphics(canvas)
const loop      = new Gloop(graphics)
const keyboard  = new BrowserEvent('keydown')
const touch     = new BrowserEvent('touchstart')


/**********************************
 *  OBJECTS
 **********************************/
const board = new Board(20,50,canvas.width(), canvas.height())
loop.item(board)

const snake = new Snake()
snake.addToBody(new BoardCell(0,0,board))
snake.addToBody(new BoardCell(1,0,board))
snake.addToBody(new BoardCell(2,0,board))
snake.goRight()
loop.item(snake)

let fruit = BoardCell.random(board)
fruit.color = 'red'
loop.item(fruit)


/**********************************
 *  CONTROLS
 **********************************/
keyboard.rule({
    when:  e => e.key == 'ArrowUp',
    then: () => snake.goUp()
})
keyboard.rule({
    when: e => e.key == 'ArrowRight',
    then: () => snake.goRight()
})
keyboard.rule({
    when: e => e.key == 'ArrowDown',
    then: () => snake.goDown()
})
keyboard.rule({
    when: e => e.key == 'ArrowLeft',
    then: () => snake.goLeft()
})

touch.preprocess = e => e.touches[0]
touch.rule({
    when: e => e.clientX > canvas.width()/2 && snake.isMovingVertically(),
    then: e => snake.goRight()
})
touch.rule({
    when: e => e.clientX < canvas.width()/2 && snake.isMovingVertically(),
    then: e => snake.goLeft()
})
touch.rule({
    when: e => e.clientY > canvas.height()/2 && snake.isMovingHorizontally(),
    then: e => snake.goDown()
})
touch.rule({
    when: e => e.clientY < canvas.height()/2 && snake.isMovingHorizontally(),
    then: e => snake.goUp()
})

/**********************************
 *  RULES
 **********************************/
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