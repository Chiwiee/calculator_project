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

console.log(add());
console.log(subtract());
console.log(multiply());
console.log(divide());

const firstNumber = prompt("Enter a Number");
const operator = prompt("Operator: +, -, *, /");
const secondNumber = prompt("Enter a Number");

console.log(firstNumber);
console.log(operator);
console.log(secondNumber);

function operate() {}
