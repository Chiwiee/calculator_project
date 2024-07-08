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
      let content = document.querySelector("span");
      switch (button.id) {
        case "num0":
          const zero = document.createElement("span");
          zero.textContent = "0";
          content.appendChild(zero);
          break;
        case "num1":
          const one = document.createElement("span");
          one.textContent = "1";
          content.appendChild(one);
          break;
        case "num2":
          const two = document.createElement("span");
          two.textContent = "2";
          content.appendChild(two);
          break;
        case "num3":
          const three = document.createElement("span");
          three.textContent = "3";
          content.appendChild(three);
          break;
        case "num4":
          const four = document.createElement("span");
          four.textContent = "4";
          content.appendChild(four);
          break;
        case "num5":
          const five = document.createElement("span");
          five.textContent = "5";
          content.appendChild(five);
          break;
        case "num6":
          const six = document.createElement("span");
          six.textContent = "6";
          content.appendChild(six);
          break;
        case "num7":
          const seven = document.createElement("span");
          seven.textContent = "7";
          content.appendChild(seven);
          break;
        case "num8":
          const eight = document.createElement("span");
          eight.textContent = "8";
          content.appendChild(eight);
          break;
        case "num9":
          const nine = document.createElement("span");
          nine.textContent = "9";
          content.appendChild(nine);
          break;
        case "clear":
          break;
        case "plus":
          const plus = document.createElement("span");
          plus.textContent = " + ";
          content.appendChild(plus);
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
