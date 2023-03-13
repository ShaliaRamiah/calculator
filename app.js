// Selecting the element with the class "displayScreen" and assigning it to the variable "screenDisplay"
const screenDisplay = document.querySelector('.displayScreen');
// Selecting all the button elements in the HTML file and assigning them to the variable "buttons"
const buttons = document.querySelectorAll('button');

// An empty array that will hold the user's input
let calculation = [];

// Variable that will hold the final calculation as a string
let totalCalculation;

// A function that takes a button element as a parameter and performs the appropriate action based on the button's value
function calculate(button) {
    const value = button.textContent
    if (value == "AC") { // If the button's value is "AC", clear the calculation array and display "0" on the screen
        calculation = [];
        screenDisplay.textContent = '0';
    } else if (value === "=") { // If the button's value is "=", evaluate the total calculation and display the result on the screen
        screenDisplay.textContent = eval(totalCalculation)
    } else { // If the button's value is a number or operator, add it to the calculation array and update the total calculation string
        calculation.push(value);
        totalCalculation = calculation.join('');
        screenDisplay.textContent = totalCalculation;
    }
}
// Loops through each button and adds a click event listener that calls the calculate function with the clicked button as a parameter
buttons.forEach(button => button.addEventListener('click', () => calculate(button)));
