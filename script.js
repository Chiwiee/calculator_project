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

function operate() {
  const firstNumber = prompt("Enter a Number");
  const operator = prompt("Operator: +, -, *, /");
  const secondNumber = prompt("Enter a Number");

  console.log(firstNumber);
  console.log(operator);
  console.log(secondNumber);

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
// const operateSum = operate();
// console.log(operateSum);

function displayTextContent() {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      switch (button.id) {
        case "num0":
          break;
        case "num1":
          break;
        case "num2":
          break;
        case "num3":
          break;
        case "num4":
          break;
        case "num5":
          break;
        case "num6":
          break;
        case "num7":
          break;
        case "num8":
          break;
        case "num9":
          break;
        case "num0":
          break;
        case "clear":
          break;
        case "plus":
          break;
        case "minus":
          break;
        case "times":
          break;
        case "divide":
          break;
        case "equal":
          break;
      }
      console.log(button.id);
    });
  });
}
displayTextContent();
