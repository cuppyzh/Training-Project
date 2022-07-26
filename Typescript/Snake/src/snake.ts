class SnakeBody {
    X: number
    Y: number

    constructor(X: number, Y: number){
        this.X = X
        this.Y = Y
    }
}

class Snake {
    Body: SnakeBody[]

    constructor(){
        this.Body = [new SnakeBody(10,10)]
        this.Body.push(new SnakeBody(20,10))
    }

    Head(): SnakeBody{
        return this.Body[0]
    }

    Move(evt : KeyboardEvent){
        
    }

    DrawSnake(ctx: CanvasRenderingContext2D) {
        this.Body.forEach(element => {
            ctx.fillRect(element.X, element.Y, 10, 10)
        });
    }
}