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

I need to create an ongoing program that will constantly take in numbers and operations. This will be the operate function.

*/
let payload = 0;
// Operator button elements
let addBtn = document.querySelector(".add");
let subtractBtn = document.querySelector(".subtract");
let percentBtn = document.querySelector(".percent");
let divideBtn = document.querySelector(".divide");
let multiplyBtn = document.querySelector(".multiply");
let equalsBtn = document.querySelector(".equals");
let clearBtn = document.querySelector(".AC");
let negativeBtn = document.querySelector(".negative");
let decimalBtn = document.querySelector(".decimal");

// Number button elements
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

//button values
btn0.value = 0;
btn1.value = 1;
btn2.value = 2;
btn3.value = 3;
btn4.value = 4;
btn5.value = 5;
btn6.value = 6;
btn7.value = 7;
btn8.value = 8;
btn9.value = 9;
addBtn.value = " + ";
subtractBtn.value = " - ";
multiplyBtn.value = " x ";
divideBtn.value = " ÷ ";
percentBtn.value = " % ";
decimalBtn.value = ".";

// negativeBtn.value = "-"

// Display elements
let primary = document.querySelector(".primary");
let secondary = document.querySelector(".secondary");

// Operator functions
let add = (element) => (payload += element);
let subtract = (element) => (payload -= element);
let multiply = (element) => (payload *= element);
let divide = (element) => (payload /= element);
let percent = (element) => (payload = (payload / 100) * element);
let decimal = (element) => {
	return (payload += parseFloat(`0.${element}`));
};

// Calculator is on
let calculatorActive = true;

// Operate function
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
		case "%":
			percent(number);
			return;
	}

	return payload;
};

// // Clear the calculation screen
// let clearSecondary = () => {
// 	current = "";
// 	secondary.innerHTML = "";
// };

// // Clear the primary screen
// let clearPrimary = () => {
// 	currentPrimary = " ";
// 	primary.innerHTML = `<h2 class="primary">  </h2>`;
// };

// let currentPrimary = "";
// let currentSecondary = "";

// let allNumberButtons = document.querySelectorAll(".number");

// allNumberButtons.forEach((button) => {
// 	button.addEventListener("click", () => {
// 		// console.log("clicked", button);
// 		// secondary.innerHTML = `${current}`;
// 		currentPrimary += button.value;
// 		currentSecondary += button.value;
// 	});
// });

// allOperatorButtons = document.querySelectorAll(".operator");

// allOperatorButtons.forEach((button) => {
// 	button.addEventListener("click", () => {
// 		currentSecondary += button.value;
// 		primary.innerHTML = `${button.value}`;

// 		clearPrimary();
// 	});
// });

// secondary.innerHTML = `${current}`;
primary.innerHTML = payload;
// while (calculatorActive) {}

// setInterval(function () {
// 	secondary.innerHTML = `${currentSecondary}`;
// 	primary.innerHTML = `${currentPrimary}`;
// }, 100);
