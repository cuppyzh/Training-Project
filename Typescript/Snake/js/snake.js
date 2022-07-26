class SnakeBody {
    constructor(X, Y) {
        this.X = X;
        this.Y = Y;
    }
}
class Snake {
    constructor() {
        this.Body = [new SnakeBody(10, 10)];
        this.Body.push(new SnakeBody(20, 10));
    }
    Head() {
        return this.Body[0];
    }
    Move(evt) {
    }
    DrawSnake(ctx) {
        this.Body.forEach(element => {
            ctx.fillRect(element.X, element.Y, 10, 10);
        });
    }
}
