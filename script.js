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
      let content = document.querySelector(".text");
      let result = document.querySelector("#result");
      let number = firstNumber.length + secondNumber.length;

      // If Statement for TextContent and to Push Values to an Array
      if (button.id == "zero") {
        const zero = document.createElement("span");
        zero.textContent = "0";
        zero.classList = `num${number}`;
        content.appendChild(zero);
        if (button.id == "zero" && operator == "") {
          firstNumber.push(0);
        } else if (button.id == "zero" && operator != "") {
          secondNumber.push(0);
        }
      }
      if (button.id == "one") {
        const one = document.createElement("span");
        one.textContent = "1";
        one.classList = `num${number}`;
        content.appendChild(one);
        if (button.id == "one" && operator == "") {
          firstNumber.push(1);
        } else if (button.id == "one" && operator != "") {
          secondNumber.push(1);
        }
      }
      if (button.id == "two") {
        const two = document.createElement("span");
        two.textContent = "2";
        two.classList = `num${number}`;
        content.appendChild(two);
        if (button.id == "two" && operator == "") {
          firstNumber.push(2);
        } else if (button.id == "two" && operator != "") {
          secondNumber.push(2);
        }
      }

      if (button.id == "three") {
        const three = document.createElement("span");
        three.textContent = "3";
        three.classList = `num${number}`;
        content.appendChild(three);
        if (button.id == "three" && operator == "") {
          firstNumber.push(3);
        } else if (button.id == "three" && operator != "") {
          secondNumber.push(3);
        }
      }

      if (button.id == "four") {
        const four = document.createElement("span");
        four.textContent = "4";
        four.classList = `num${number}`;
        content.appendChild(four);
        if (button.id == "four" && operator == "") {
          firstNumber.push(4);
        } else if (button.id == "four" && operator != "") {
          secondNumber.push(4);
        }
      }

      if (button.id == "five") {
        const five = document.createElement("span");
        five.textContent = "5";
        five.classList = `num${number}`;
        content.appendChild(five);
        if (button.id == "five" && operator == "") {
          firstNumber.push(5);
        } else if (button.id == "five" && operator != "") {
          secondNumber.push(5);
        }
      }

      if (button.id == "six") {
        const six = document.createElement("span");
        six.textContent = "6";
        six.classList = `num${number}`;
        content.appendChild(six);
        if (button.id == "six" && operator == "") {
          firstNumber.push(6);
        } else if (button.id == "six" && operator != "") {
          secondNumber.push(6);
        }
      }

      if (button.id == "seven") {
        const seven = document.createElement("span");
        seven.textContent = "7";
        seven.classList = `num${number}`;
        content.appendChild(seven);
        if (button.id == "seven" && operator == "") {
          firstNumber.push(7);
        } else if (button.id == "seven" && operator != "") {
          secondNumber.push(7);
        }
      }

      if (button.id == "eight") {
        const eight = document.createElement("span");
        eight.textContent = "8";
        eight.classList = `num${number}`;
        content.appendChild(eight);
        if (button.id == "eight" && operator == "") {
          firstNumber.push(8);
        } else if (button.id == "eight" && operator != "") {
          secondNumber.push(8);
        }
      }

      if (button.id == "nine") {
        const nine = document.createElement("span");
        nine.textContent = "9";
        nine.classList = `num${number}`;
        content.appendChild(nine);
        if (button.id == "nine" && operator == "") {
          firstNumber.push(9);
        } else if (button.id == "nine" && operator != "") {
          secondNumber.push(9);
        }
      }
      if (button.id == "dot") {
        if (firstNumber.slice(-1) != ".") {
          const dot = document.createElement("span");
          dot.textContent = ".";
          dot.classList = `num${number}`;
          content.appendChild(dot);
          if (button.id == "dot" && operator == "") {
            firstNumber.push(".");
          }
        } else if (secondNumber.slice(-1) != "." && operator != "") {
          const dot = document.createElement("span");
          dot.textContent = ".";
          dot.classList = `num${number}`;
          content.appendChild(dot);
          if (button.id == "dot" && operator != "") {
            secondNumber.push(".");
          }
        }
      }
      // Operator, Equal and Clear

      if (button.id == "plus") {
        if (operator == "") {
          const plus = document.createElement("span");
          plus.textContent = " + ";
          plus.classList = `plus`;
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
          minus.classList = `minus`;
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
          times.classList = `times`;
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
          divide.classList = `divide`;
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
      console.log(`Numbers Length: ${number}`);
    });
  });
}
displayTextContent();

// create new variable for sum value then create new function to calculate the sum value to the new number
// add splice + if statement show => "..." in show content to only show latest number

//everytime you created a span add class id that use array.length/
//backspace removeChild using array.length targeting the span
