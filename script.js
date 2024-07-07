function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}
function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}
function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

const firstNumber = prompt("Enter a Number");
const operator = prompt("Operator: +, -, *, /");
const secondNumber = prompt("Enter a Number");

console.log(firstNumber);
console.log(operator);
console.log(secondNumber);

function operate(firstNumber, operator, secondNumber) {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "*":
      return multiply(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);
  }
}
let operateSum = operate(firstNumber, operator, secondNumber);
console.log(operateSum);
