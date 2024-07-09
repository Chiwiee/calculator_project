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
  const num = [];

  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let content = document.querySelector("span");
      switch (button.id) {
        case "num0":
          const zero = document.createElement("span");
          zero.textContent = "0";
          content.appendChild(zero);
          num.push(0);
          break;
        case "num1":
          const one = document.createElement("span");
          one.textContent = "1";
          content.appendChild(one);
          num.push(1);
          break;
        case "num2":
          const two = document.createElement("span");
          two.textContent = "2";
          content.appendChild(two);
          num.push(2);
          break;
        case "num3":
          const three = document.createElement("span");
          three.textContent = "3";
          content.appendChild(three);
          num.push(3);
          break;
        case "num4":
          const four = document.createElement("span");
          four.textContent = "4";
          content.appendChild(four);
          num.push(4);
          break;
        case "num5":
          const five = document.createElement("span");
          five.textContent = "5";
          content.appendChild(five);
          num.push(5);
          break;
        case "num6":
          const six = document.createElement("span");
          six.textContent = "6";
          content.appendChild(six);
          num.push(6);
          break;
        case "num7":
          const seven = document.createElement("span");
          seven.textContent = "7";
          content.appendChild(seven);
          num.push(7);
          break;
        case "num8":
          const eight = document.createElement("span");
          eight.textContent = "8";
          content.appendChild(eight);
          num.push(8);
          break;
        case "num9":
          const nine = document.createElement("span");
          nine.textContent = "9";
          content.appendChild(nine);
          num.push(9);
          break;
        case "clear":
          break;
        case "plus":
          const plus = document.createElement("span");
          plus.textContent = " + ";
          content.appendChild(plus);
          break;
        case "minus":
          const minus = document.createElement("span");
          minus.textContent = " - ";
          content.appendChild(minus);
          break;
        case "times":
          const times = document.createElement("span");
          times.textContent = " × ";
          content.appendChild(times);
          break;
        case "divide":
          const divide = document.createElement("span");
          divide.textContent = " ÷ ";
          content.appendChild(divide);
          break;
        case "equal":
          break;
      }
      console.log(button.id);
    });
  });
  console.table(num);
}
displayTextContent();
