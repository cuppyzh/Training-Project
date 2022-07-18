package main

import ("fmt"
		"time"
		"math/rand")

var boardSize = 3

type Snake struct {
	Direction string
	Body []SnakeBody
}

type Food struct {
	isEaten bool
	X int
	Y int
}

type SnakeBody struct {
	X int
	Y int
}

func InitSnake() Snake {
	var snake Snake
	// snake.Body = append(snake.Body, SnakeBody{X:3, Y:0})
	// snake.Body = append(snake.Body, SnakeBody{X:2, Y:0})
	// snake.Body = append(snake.Body, SnakeBody{X:1, Y:0})
	snake.Body = append(snake.Body, SnakeBody{X:0, Y:0})
	snake.Direction = "D"

	return snake
}

func Move(snake *Snake, move string, food *Food) bool {
	
	next := SnakeBody{X: snake.Body[0].X, Y: snake.Body[0].Y}

	if (snake.Direction == "W"){
		next.X--
	} else if (snake.Direction == "D"){
		next.Y++
	} else if (snake.Direction == "S"){
		next.X++
	} else if (snake.Direction == "A"){
		next.Y--
	}

	// Check for collision
	for i := 1; i < len(snake.Body); i++ {
		if snake.Body[i].X == next.X && snake.Body[i].Y == next.Y {
			return false
		}
	}

	// Check for out of bound
	if (next.X >= boardSize || next.Y >= boardSize || next.X < 0 || next.Y < 0) {
		return false;
	}

	for index, _ := range(snake.Body) {
		temp := snake.Body[index]
		snake.Body[index] = next
		next = temp
	}

	return true;
}

func PrintBoard(snake Snake, food Food) {
	x := boardSize
	y := boardSize
	
	for i := 0; i < x; i++ {
		for j := 0; j < y; j++ {
			
			if (food.X == i && food.Y == j){
				fmt.Print(".")
				continue
			}

			flag := false
			for _, val := range(snake.Body) {
				if val.X == i && val.Y == j {
					flag = true
					break
				}
			}

			if flag == false {
				fmt.Print("-")
			} else {
				fmt.Print("x")
			}

		}

		fmt.Println(" ")
	}
}

func SpawnFood(snake Snake) Food {
	
    rand.Seed(time.Now().UnixNano())
    min := 0
    max := boardSize-1
	
	for {
		x := rand.Intn(max - min + 1) + min
		y := rand.Intn(max - min + 1) + min

		flag := true

		for _, val := range(snake.Body) {
			if (val.X == x && val.Y == y){
				flag = false
				break
			}
		}

		if flag == true {
			var food Food
			food.X = x
			food.Y = y
			food.isEaten = false
			return food
		}
	}
}

func Eat(snake *Snake, food *Food) {
	next := SnakeBody{X: snake.Body[0].X, Y: snake.Body[0].Y}

	if (snake.Direction == "W"){
		next.X--
	} else if (snake.Direction == "D"){
		next.Y++
	} else if (snake.Direction == "S"){
		next.X++
	} else if (snake.Direction == "A"){
		next.Y--
	}

	if next.X == food.X && next.Y == food.Y {
		snake.Body = append([]SnakeBody{next}, snake.Body...)
		food.isEaten = true
	}
}

func Checkmove(snake *Snake, move string) {
	if ((move == "W" && snake.Direction != "S") || (move == "S" && snake.Direction != "WS") || (move == "A" && snake.Direction != "D") || (move == "D" && snake.Direction != "A")) {
		snake.Direction = move
	} 
}

func IsWinning(snake Snake) bool{
	if (len(snake.Body) >= (boardSize * boardSize) - 1){
		return true
	} else {
		return false
	}
}

func main() {
	snake := InitSnake()
	food := SpawnFood(snake)
	fmt.Printf("Insert Board Size (>= 3): ")
	fmt.Scanln(&boardSize)
	fmt.Println("\n\n")
	
	for {
		PrintBoard(snake, food)

		fmt.Println("\n\n")

		fmt.Printf("Press Key (W/A/S/D) then press Enter: ")
		var direction string
		fmt.Scanln(&direction)
		Checkmove(&snake, direction)

		fmt.Println("\n\n")

		Eat(&snake, &food)
		if (food.isEaten){
			if (IsWinning(snake)){
				fmt.Println("YOU WIN!!!")
				break
			}

			food = SpawnFood(snake)
		} else {
			if !Move(&snake, direction, &food) {
				fmt.Println("YOU LOSE!!")
				break
			}
		}
	}
}