class SnakeBody {
    constructor(X, Y) {
        this.X = X;
        this.Y = Y;
    }
}
class Snake {
    constructor() {
        this.Direction = 'D';
        this.Body = [new SnakeBody(10, 10)];
        this.Body.push(new SnakeBody(20, 10));
    }
    Head() {
        return this.Body[0];
    }
    Move() {
        if (this.Direction == 'D') {
            this.Body[0].X += 10;
        }
        else if (this.Direction == 'S') {
            this.Body[0].Y += 10;
        }
        else if (this.Direction == 'W') {
            this.Body[0].Y -= 10;
        }
        else if (this.Direction == 'A') {
            this.Body[0].X -= 10;
        }
    }
    DrawSnake(ctx) {
        this.Body.forEach(element => {
            ctx.fillRect(element.X, element.Y, 10, 10);
        });
    }
}
