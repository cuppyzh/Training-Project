var boardHeight = 100;
var boardWidth = 100;
var multiplier = 10;
let ctx;
var snake = new Snake();
window.onload = () => {
    let canvas = document.getElementById('canvas');
    if (canvas == null || !canvas.getContext) {
        alert('Canvas is not supported by the browser');
        return;
    }
    alert('Canvas is supported by the browser');
    ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(0,200,00)";
    Tests();
};
function InitGame() {
}
function Tests() {
    snake.DrawSnake(ctx);
}
