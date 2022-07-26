var boardHeight: number = 100
var boardWidth: number = 100
var multiplier: number = 10

let ctx: CanvasRenderingContext2D

var snake: Snake = new Snake()

window.onload = () => {
    let canvas = document.getElementById('canvas') as HTMLCanvasElement | null

    if (canvas == null || !canvas.getContext){
        alert('Canvas is not supported by the browser')
        return
    }

    // alert('Canvas is supported by the browser')

    ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(0,200,00)"

    Tests()
    setInterval(MoveSnake,100);
}

window.addEventListener('keypress', (evt: KeyboardEvent) => {
    if (evt.key.toUpperCase() == 'W' && snake.Direction != 'S') {
        snake.Direction = 'W'
        return
    }

    if (evt.key.toUpperCase() == 'S' && snake.Direction != 'W') {
        snake.Direction = 'S'
        return
    }

    if (evt.key.toUpperCase() == 'A' && snake.Direction != 'D') {
        snake.Direction = 'A'
        return
    }

    if (evt.key.toUpperCase() == 'D' && snake.Direction != 'A') {
        snake.Direction = 'D'
        return
    }
})

function MoveSnake(){
    snake.Move()
    snake.DrawSnake(ctx)
}

function InitGame() {

}

function Tests() {
    snake.DrawSnake(ctx)
}