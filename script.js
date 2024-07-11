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
const num1 = [];
const num2 = [];
let operator = "";

function displayTextContent() {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let content = document.querySelector("span");
      switch (button.id) {
        case "0":
          const zero = document.createElement("span");
          zero.textContent = "0";
          content.appendChild(zero);
          break;
        case "1":
          const one = document.createElement("span");
          one.textContent = "1";
          content.appendChild(one);
          break;
        case "2":
          const two = document.createElement("span");
          two.textContent = "2";
          content.appendChild(two);
          break;
        case "3":
          const three = document.createElement("span");
          three.textContent = "3";
          content.appendChild(three);
          break;
        case "4":
          const four = document.createElement("span");
          four.textContent = "4";
          content.appendChild(four);
          break;
        case "5":
          const five = document.createElement("span");
          five.textContent = "5";
          content.appendChild(five);
          break;
        case "6":
          const six = document.createElement("span");
          six.textContent = "6";
          content.appendChild(six);
          break;
        case "7":
          const seven = document.createElement("span");
          seven.textContent = "7";
          content.appendChild(seven);
          break;
        case "8":
          const eight = document.createElement("span");
          eight.textContent = "8";
          content.appendChild(eight);
          break;
        case "9":
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
          operator = "plus";
          break;
        case "minus":
          const minus = document.createElement("span");
          minus.textContent = " - ";
          content.appendChild(minus);
          operator = "minus";
          break;
        case "times":
          const times = document.createElement("span");
          times.textContent = " × ";
          content.appendChild(times);
          operator = "times";
          break;
        case "divide":
          const divide = document.createElement("span");
          divide.textContent = " ÷ ";
          content.appendChild(divide);
          operator = "divide";
          break;
        case "equal":
          break;
      }
      if (button.id == "0" && operator == "") {
        num1.push(0);
      } else if (button.id == "0" && operator != "") {
        num2.push(0);
      }
      if (button.id == "1" && operator == "") {
        num1.push(1);
      } else if (button.id == "1" && operator != "") {
        num2.push(1);
      }
      if (button.id == "2" && operator == "") {
        num1.push(2);
      } else if (button.id == "2" && operator != "") {
        num2.push(2);
      }
      if (button.id == "3" && operator == "") {
        num1.push(3);
      } else if (button.id == "3" && operator != "") {
        num2.push(3);
      }
      if (button.id == "4" && operator == "") {
        num1.push(4);
      } else if (button.id == "4" && operator != "") {
        num2.push(4);
      }
      if (button.id == "4" && operator == "") {
        num1.push(4);
      } else if (button.id == "4" && operator != "") {
        num2.push(4);
      }
      if (button.id == "5" && operator == "") {
        num1.push(5);
      } else if (button.id == "5" && operator != "") {
        num2.push(5);
      }
      if (button.id == "6" && operator == "") {
        num1.push(6);
      } else if (button.id == "6" && operator != "") {
        num2.push(6);
      }
      if (button.id == "7" && operator == "") {
        num1.push(7);
      } else if (button.id == "7" && operator != "") {
        num2.push(7);
      }
      if (button.id == "8" && operator == "") {
        num1.push(8);
      } else if (button.id == "8" && operator != "") {
        num2.push(8);
      }
      if (button.id == "9" && operator == "") {
        num1.push(9);
      } else if (button.id == "9" && operator != "") {
        num2.push(9);
      }

      console.log(button.id);
      console.log(num1);
      console.log(num2);
    });
  });
}
displayTextContent();

function reduceNum1(num) {}
reduceNum1(num1);
function reduceNum2(num) {}
reduceNum2(num2);
