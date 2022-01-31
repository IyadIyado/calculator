//This project is a calculator app

//Sudo code

/* 
The calculator should calculate two operations with two numbers and an operation.

DO NOT USE eval() or returning new function that evaluates a string.

Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

Bonus: Add decimals
Bonus: Look aesthetically pleasing 
Bonus: Add a backspace button

-------------------------------------------------------------------

I will create a tracked variable that will be carried and used for every operation.
This variable will be called: payload

I need to create an ongoing program that will consdtantly take in numbers and operations. This will be the operate function.

*/

//Add function: take 2 values and add them, and return the total.

let payload = 0;

let btn1 = document.querySelector(".one");
let btn2 = document.querySelector(".two");
let btn3 = document.querySelector(".three");
let btn4 = document.querySelector(".four");
let btn5 = document.querySelector(".five");
let btn6 = document.querySelector(".six");
let btn7 = document.querySelector(".seven");
let btn8 = document.querySelector(".eight");
let btn9 = document.querySelector(".nine");
let btn0 = document.querySelector(".zero");

let display = document.querySelector(".display");

let add = (element) => (payload += element);
let subtract = (element) => (payload -= element);
let multiply = (element) => (payload *= element);
let divide = (element) => (payload /= element);

let decimal = (element) => {
	return (payload += parseFloat(`0.${element}`));
};

let calculatorActive = true;

let operate = (operator, number) => {
	number = parseInt(number);
	switch (operator) {
		case "+":
			add(number);
			return;
		case "-":
			subtract(number);
			return;
		case "*":
			multiply(number);
			return;
		case "/":
			divide(number);
			return;
		case ".":
			decimal(number);
			return;
	}
};

add(10);
add(20);
display.innerHTML = multiply(2);

// while (calculatorActive) {}
