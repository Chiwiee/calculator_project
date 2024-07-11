// Function that Calculate the Values from Operate Function
function add(firstNumber, sum, secondNumber) {
  return firstNumber + secondNumber || sum + secondNumber;
}
function subtract(firstNumber, sum, secondNumber) {
  return firstNumber - secondNumber || sum - secondNumber;
}
function multiply(firstNumber, sum, secondNumber) {
  return firstNumber * secondNumber || sum * secondNumber;
}
function divide(firstNumber, sum, secondNumber) {
  if (firstNumber == 0 || sum == 0 || secondNumber == 0) {
    return "ERROR: ÷ 0";
  }
  return firstNumber / secondNumber || sum / secondNumber;
}
// Operate Function that Converts and Calls Functions to Calculate
function operate(num1, sum, operator, num2) {
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
  function reduceSum(sum) {
    return sum.reduce((acc, current) => {
      return acc + current;
    }, "");
  }
  let firstNumber = parseFloat(reduceNum1(num1));
  let secondNumber = parseFloat(reduceNum2(num2));
  let sumValue = parseFloat(reduceSum(sum));

  switch (operator) {
    case "plus":
      return add(firstNumber, sumValue, secondNumber);
    case "minus":
      return subtract(firstNumber, sumValue, secondNumber);
    case "times":
      return multiply(firstNumber, sumValue, secondNumber);
    case "divide":
      return divide(firstNumber, sumValue, secondNumber);
  }
}
// Store Values
const firstNumber = [];
const secondNumber = [];
const calculatedValue = [];
let operator = "";

// Functions that Display Text Content and Push Value to an Array
function displayTextContent() {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let content = document.querySelector("span");

      // If Statement for TextContent and to Push Values to an Array
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
      // Operator, Equal and Clear

      if (button.id == "plus") {
        if (operator == "") {
          const plus = document.createElement("span");
          plus.textContent = " + ";
          content.appendChild(plus);
          operator = "plus";
        } else if (operator != "") {
          let sum = operate(
            firstNumber,
            calculatedValue,
            operator,
            secondNumber
          ).toFixed(1);
          content.textContent = `${sum}`;
          calculatedValue.push(sum);
          operator = "";
          firstNumber.splice(0, firstNumber.length);
          secondNumber.splice(0, secondNumber.length);
          calculatedValue.splice(0, calculatedValue.length - 1);
        }
      }
      if (button.id == "minus") {
        if (operator == "") {
          const minus = document.createElement("span");
          minus.textContent = " - ";
          content.appendChild(minus);
          operator = "minus";
        } else if (operator != "") {
          let sum = operate(
            firstNumber,
            calculatedValue,
            operator,
            secondNumber
          ).toFixed(1);
          content.textContent = `${sum}`;
          calculatedValue.push(sum);
          operator = "";
          firstNumber.splice(0, firstNumber.length);
          secondNumber.splice(0, secondNumber.length);
          calculatedValue.splice(0, calculatedValue.length - 1);
        }
      }
      if (button.id == "times") {
        if (operator == "") {
          const times = document.createElement("span");
          times.textContent = " × ";
          content.appendChild(times);
          operator = "times";
        } else if (operator != "") {
          let sum = operate(
            firstNumber,
            calculatedValue,
            operator,
            secondNumber
          ).toFixed(1);
          content.textContent = `${sum}`;
          calculatedValue.push(sum);
          operator = "";
          firstNumber.splice(0, firstNumber.length);
          secondNumber.splice(0, secondNumber.length);
          calculatedValue.splice(0, calculatedValue.length - 1);
        }
      }
      if (button.id == "divide") {
        if (operator == "") {
          const divide = document.createElement("span");
          divide.textContent = " ÷ ";
          content.appendChild(divide);
          operator = "divide";
        } else if (operator != "") {
          let sum = operate(
            firstNumber,
            calculatedValue,
            operator,
            secondNumber
          ).toFixed(1);
          content.textContent = `${sum}`;
          calculatedValue.push(sum);
          operator = "";
          firstNumber.splice(0, firstNumber.length);
          secondNumber.splice(0, secondNumber.length);
          calculatedValue.splice(0, calculatedValue.length - 1);
        }
      }
      if (button.id == "equal") {
        let sum = operate(
          firstNumber,
          calculatedValue,
          operator,
          secondNumber
        ).toFixed(1);
        content.textContent = `${sum}`;
        calculatedValue.push(sum);
        operator = "";
        firstNumber.splice(0, firstNumber.length);
        secondNumber.splice(0, secondNumber.length);
        calculatedValue.splice(0, calculatedValue.length - 1);
      }
      if (button.id == "clear") {
        content.textContent = "";
        operator = "";
        firstNumber.splice(0, firstNumber.length);
        secondNumber.splice(0, secondNumber.length);
        calculatedValue.splice(0, calculatedValue.length);
      }

      console.log(" ");
      console.log(`firstNumber: ${firstNumber}`);
      console.log(`secondNumber: ${secondNumber}`);
      console.log(`calculatedValue ${calculatedValue}`);
      console.log(`operator: ${operator}`);
    });
  });
}
displayTextContent();

// create new variable for sum value then create new function to calculate the sum value to the new number
// add splice + if statement show => "..." in show content to only show latest number
