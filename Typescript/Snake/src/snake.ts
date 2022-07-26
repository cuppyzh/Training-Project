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
    Direction: string = 'D'

    constructor(){
        this.Body = [new SnakeBody(10,10)]
        this.Body.push(new SnakeBody(20,10))
    }

    Head(): SnakeBody{
        return this.Body[0]
    }

    Move(){
        if (this.Direction == 'D') {
            this.Body[0].X += 10
        } else if (this.Direction == 'S') {
            this.Body[0].Y += 10
        } else if (this.Direction == 'W') {
            this.Body[0].Y -= 10
        } else if (this.Direction == 'A') {
            this.Body[0].X -= 10
        }
    }

    DrawSnake(ctx: CanvasRenderingContext2D) {
        this.Body.forEach(element => {
            ctx.fillRect(element.X, element.Y, 10, 10)
        });
    }
}