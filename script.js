// Function that Calculate the Values from Operate Function
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
// Operate Function that Converts and Calls Functions to Calculate
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
// Store Values
const firstNumber = [];
const secondNumber = [];
let operator = "";

// Functions that Display Text Content and Push Value to an Array
function displayTextContent() {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let content = document.querySelector("span");

      // If Statement for Pushing Values into an Array firstNumber and SecondNumber
      if (button.id == "0") {
        const zero = document.createElement("span");
        zero.textContent = "0";
        content.appendChild(zero);
        if (button.id && operator == "") {
          firstNumber.push(0);
        } else if (button.id == "0" && operator != "") {
          secondNumber.push(0);
        }
      }
      if (button.id == "1") {
        const one = document.createElement("span");
        one.textContent = "1";
        content.appendChild(one);
        if (button.id == "1" && operator == "") {
          firstNumber.push(1);
        } else if (button.id == "1" && operator != "") {
          secondNumber.push(1);
        }
      }
      if (button.id == "2") {
        const two = document.createElement("span");
        two.textContent = "2";
        content.appendChild(two);
        if (button.id == "2" && operator == "") {
          firstNumber.push(2);
        } else if (button.id == "2" && operator != "") {
          secondNumber.push(2);
        }
      }

      if (button.id == "3") {
        const three = document.createElement("span");
        three.textContent = "3";
        content.appendChild(three);
        if (button.id == "3" && operator == "") {
          firstNumber.push(3);
        } else if (button.id == "3" && operator != "") {
          secondNumber.push(3);
        }
      }

      if (button.id == "4") {
        const four = document.createElement("span");
        four.textContent = "4";
        content.appendChild(four);
        if (button.id == "4" && operator == "") {
          firstNumber.push(4);
        } else if (button.id == "4" && operator != "") {
          secondNumber.push(4);
        }
      }

      if (button.id == "5") {
        const five = document.createElement("span");
        five.textContent = "5";
        content.appendChild(five);
        if (button.id == "5" && operator == "") {
          firstNumber.push(5);
        } else if (button.id == "5" && operator != "") {
          secondNumber.push(5);
        }
      }

      if (button.id == "6") {
        const six = document.createElement("span");
        six.textContent = "6";
        content.appendChild(six);
        if (button.id == "6" && operator == "") {
          firstNumber.push(6);
        } else if (button.id == "6" && operator != "") {
          secondNumber.push(6);
        }
      }

      if (button.id == "7") {
        const seven = document.createElement("span");
        seven.textContent = "7";
        content.appendChild(seven);
        if (button.id == "7" && operator == "") {
          firstNumber.push(7);
        } else if (button.id == "7" && operator != "") {
          secondNumber.push(7);
        }
      }

      if (button.id == "8") {
        const eight = document.createElement("span");
        eight.textContent = "8";
        content.appendChild(eight);
        if (button.id == "8" && operator == "") {
          firstNumber.push(8);
        } else if (button.id == "8" && operator != "") {
          secondNumber.push(8);
        }
      }

      if (button.id == "9") {
        const nine = document.createElement("span");
        nine.textContent = "9";
        content.appendChild(nine);
        if (button.id == "9" && operator == "") {
          firstNumber.push(9);
        } else if (button.id == "9" && operator != "") {
          secondNumber.push(9);
        }
      }

      // Operator Switch Case
      switch (button.id) {
        case "clear":
          content.textContent = "";
          operator = "";
          firstNumber.splice(0, firstNumber.length);
          secondNumber.splice(0, secondNumber.length);
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
          let sum = operate(firstNumber, operator, secondNumber);
          content.textContent = `${sum}`;
          break;
      }
      console.log(firstNumber);
      console.log(secondNumber);
      console.log(operator);
      console.log(button.id);
    });
  });
}
displayTextContent();

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  return displayTextContent();
});

// add if statement in operators to only add 2 numbers (firstNumber + secondNumber)
// add splice + if statement show => "..." in show content to only show latest number
