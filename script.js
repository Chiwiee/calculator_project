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

function operate(num1, operator, num2) {
  function reduceNum1(num) {
    return num.reduce((acc, current) => {
      return acc + current;
    }, "");
  }
  function reduceNum2(num) {
    return num.reduce((acc, current) => {
      return acc + current;
    }, "");
  }

  let firstNumber = parseFloat(reduceNum1(num1));
  let secondNumber = parseFloat(reduceNum2(num2));

  console.log(firstNumber);
  console.log(operator);
  console.log(secondNumber);

  switch (operator) {
    case "plus":
      return add(firstNumber, secondNumber);
    case "minus":
      return subtract(firstNumber, secondNumber);
    case "times":
      return multiply(firstNumber, secondNumber);
    case "divide":
      return divide(firstNumber, secondNumber);
  }
}
// const operateSum = operate();
// console.log(operateSum);
const firstNumber = [];
const secondNumber = [];
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
          alert(operate(firstNumber, operator, secondNumber));
          break;
      }
      if (button.id == "0" && operator == "") {
        firstNumber.push(0);
      } else if (button.id == "0" && operator != "") {
        secondNumber.push(0);
      }
      if (button.id == "1" && operator == "") {
        firstNumber.push(1);
      } else if (button.id == "1" && operator != "") {
        secondNumber.push(1);
      }
      if (button.id == "2" && operator == "") {
        firstNumber.push(2);
      } else if (button.id == "2" && operator != "") {
        secondNumber.push(2);
      }
      if (button.id == "3" && operator == "") {
        firstNumber.push(3);
      } else if (button.id == "3" && operator != "") {
        secondNumber.push(3);
      }
      if (button.id == "4" && operator == "") {
        firstNumber.push(4);
      } else if (button.id == "4" && operator != "") {
        secondNumber.push(4);
      }
      if (button.id == "4" && operator == "") {
        firstNumber.push(4);
      } else if (button.id == "4" && operator != "") {
        secondNumber.push(4);
      }
      if (button.id == "5" && operator == "") {
        firstNumber.push(5);
      } else if (button.id == "5" && operator != "") {
        secondNumber.push(5);
      }
      if (button.id == "6" && operator == "") {
        firstNumber.push(6);
      } else if (button.id == "6" && operator != "") {
        secondNumber.push(6);
      }
      if (button.id == "7" && operator == "") {
        firstNumber.push(7);
      } else if (button.id == "7" && operator != "") {
        secondNumber.push(7);
      }
      if (button.id == "8" && operator == "") {
        firstNumber.push(8);
      } else if (button.id == "8" && operator != "") {
        secondNumber.push(8);
      }
      if (button.id == "9" && operator == "") {
        firstNumber.push(9);
      } else if (button.id == "9" && operator != "") {
        secondNumber.push(9);
      }

      console.log(button.id);
      console.log(firstNumber);
      console.log(secondNumber);
    });
  });
}
displayTextContent();
