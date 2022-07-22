package main

import (
	"fmt"

	"github.com/cuppyzh/go/greetings"
)

func main() {
	// Get a greeting message and print it.
	message := greetings.Hello("Gladys")
	fmt.Println(message)
}
