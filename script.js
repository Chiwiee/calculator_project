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

// For Backspace Targeting
function lengthTotal(firstNumber, secondNumber, operator) {
  if (operator != "") {
    return firstNumber.length + secondNumber.length + 1;
  } else {
    return firstNumber.length + secondNumber.length;
  }
}
function displayTextContent(id) {
  let content = document.querySelector(".text");
  let result = document.querySelector(".result");
  let previous = document.querySelector(".previous");
  let textContainer = document.querySelector("#text-content");
  let number = lengthTotal(firstNumber, secondNumber, operator);
  // If Statement for TextContent and to Push Values to an Array
  if (id == "zero") {
    const zero = document.createElement("span");
    zero.textContent = "0";
    zero.classList = `num${number}`;
    content.appendChild(zero);
    if (id == "zero" && operator == "") {
      firstNumber.push(0);
    } else if (id == "zero" && operator != "") {
      secondNumber.push(0);
    }
  }
  if (id == "one") {
    const one = document.createElement("span");
    one.textContent = "1";
    one.classList = `num${number}`;
    content.appendChild(one);
    if (id == "one" && operator == "") {
      firstNumber.push(1);
    } else if (id == "one" && operator != "") {
      secondNumber.push(1);
    }
  }
  if (id == "two") {
    const two = document.createElement("span");
    two.textContent = "2";
    two.classList = `num${number}`;
    content.appendChild(two);
    if (id == "two" && operator == "") {
      firstNumber.push(2);
    } else if (id == "two" && operator != "") {
      secondNumber.push(2);
    }
  }

  if (id == "three") {
    const three = document.createElement("span");
    three.textContent = "3";
    three.classList = `num${number}`;
    content.appendChild(three);
    if (id == "three" && operator == "") {
      firstNumber.push(3);
    } else if (id == "three" && operator != "") {
      secondNumber.push(3);
    }
  }

  if (id == "four") {
    const four = document.createElement("span");
    four.textContent = "4";
    four.classList = `num${number}`;
    content.appendChild(four);
    if (id == "four" && operator == "") {
      firstNumber.push(4);
    } else if (id == "four" && operator != "") {
      secondNumber.push(4);
    }
  }

  if (id == "five") {
    const five = document.createElement("span");
    five.textContent = "5";
    five.classList = `num${number}`;
    content.appendChild(five);
    if (id == "five" && operator == "") {
      firstNumber.push(5);
    } else if (id == "five" && operator != "") {
      secondNumber.push(5);
    }
  }

  if (id == "six") {
    const six = document.createElement("span");
    six.textContent = "6";
    six.classList = `num${number}`;
    content.appendChild(six);
    if (id == "six" && operator == "") {
      firstNumber.push(6);
    } else if (id == "six" && operator != "") {
      secondNumber.push(6);
    }
  }

  if (id == "seven") {
    const seven = document.createElement("span");
    seven.textContent = "7";
    seven.classList = `num${number}`;
    content.appendChild(seven);
    if (id == "seven" && operator == "") {
      firstNumber.push(7);
    } else if (id == "seven" && operator != "") {
      secondNumber.push(7);
    }
  }

  if (id == "eight") {
    const eight = document.createElement("span");
    eight.textContent = "8";
    eight.classList = `num${number}`;
    content.appendChild(eight);
    if (id == "eight" && operator == "") {
      firstNumber.push(8);
    } else if (id == "eight" && operator != "") {
      secondNumber.push(8);
    }
  }

  if (id == "nine") {
    const nine = document.createElement("span");
    nine.textContent = "9";
    nine.classList = `num${number}`;
    content.appendChild(nine);
    if (id == "nine" && operator == "") {
      firstNumber.push(9);
    } else if (id == "nine" && operator != "") {
      secondNumber.push(9);
    }
  }
  if (id == "dot") {
    if (firstNumber.slice(-1) != ".") {
      const dot = document.createElement("span");
      dot.textContent = ".";
      dot.classList = `num${number}`;
      content.appendChild(dot);
      if (id == "dot" && operator == "") {
        firstNumber.push(".");
      } else if (id == "dot" && operator != "") {
        secondNumber.push(".");
      }
    } else if (secondNumber.slice(-1) != "." && operator != "") {
      const dot = document.createElement("span");
      dot.textContent = ".";
      dot.classList = `num${number}`;
      content.appendChild(dot);
    }
  }
  // Operator, Equal and Clear

  if (id == "plus") {
    if (operator == "") {
      const plus = document.createElement("span");
      plus.textContent = " + ";
      plus.classList = `num${number}`;
      content.appendChild(plus);
      operator = "plus";
    } else if (operator != "") {
      let sum = operate(firstNumber, calculatedValue, operator, secondNumber);
      content.textContent = `${sum}`;
      result.textContent = `${sum}`;

      calculatedValue.push(sum);
      operator = "";
      firstNumber.splice(0, firstNumber.length);
      secondNumber.splice(0, secondNumber.length);
      calculatedValue.splice(0, calculatedValue.length - 1);
    }
  }
  if (id == "minus") {
    if (operator == "") {
      const minus = document.createElement("span");
      minus.textContent = " - ";
      minus.classList = `num${number}`;
      content.appendChild(minus);
      operator = "minus";
    } else if (operator != "") {
      let sum = operate(firstNumber, calculatedValue, operator, secondNumber);
      content.textContent = `${sum}`;
      result.textContent = `${sum}`;
      calculatedValue.push(sum);
      operator = "";
      firstNumber.splice(0, firstNumber.length);
      secondNumber.splice(0, secondNumber.length);
      calculatedValue.splice(0, calculatedValue.length - 1);
    }
  }
  if (id == "times") {
    if (operator == "") {
      const times = document.createElement("span");
      times.textContent = " × ";
      times.classList = `num${number}`;
      content.appendChild(times);
      operator = "times";
    } else if (operator != "") {
      let sum = operate(firstNumber, calculatedValue, operator, secondNumber);
      content.textContent = `${sum}`;
      result.textContent = `${sum}`;
      calculatedValue.push(sum);
      operator = "";
      firstNumber.splice(0, firstNumber.length);
      secondNumber.splice(0, secondNumber.length);
      calculatedValue.splice(0, calculatedValue.length - 1);
    }
  }
  if (id == "divide") {
    if (operator == "") {
      const divide = document.createElement("span");
      divide.textContent = " ÷ ";
      divide.classList = `num${number}`;
      content.appendChild(divide);
      operator = "divide";
    } else if (operator != "") {
      let sum = operate(firstNumber, calculatedValue, operator, secondNumber);
      content.textContent = `${sum}`;
      result.textContent = `${sum}`;
      calculatedValue.push(sum);
      operator = "";
      firstNumber.splice(0, firstNumber.length);
      secondNumber.splice(0, secondNumber.length);
      calculatedValue.splice(0, calculatedValue.length - 1);
    }
  }
  if (id == "equal") {
    let sum = operate(firstNumber, calculatedValue, operator, secondNumber);
    content.textContent = `${sum}`;
    result.textContent = `${sum}`;
    calculatedValue.push(sum);
    operator = "";
    firstNumber.splice(0, firstNumber.length);
    secondNumber.splice(0, secondNumber.length);
    calculatedValue.splice(0, calculatedValue.length - 1);
  }
  if (id == "clear") {
    content.textContent = "";
    result.textContent = "";
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
}

// Functions that Display Text Content and Push Value to an Array
function buttonEvents() {
  function mouseEvents() {
    let buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        let id = button.id;
        displayTextContent(id);
      });
    });
  }
  mouseEvents();
  function keyboardEvents() {
    window.addEventListener("keydown", (event) => {
      console.log(event.code);
    });
  }
  keyboardEvents();
}

buttonEvents();

// create new variable for sum value then create new function to calculate the sum value to the new number
// add splice + if statement show => "..." in show content to only show latest number

//everytime you created a span add class id that use array.length/
//backspace removeChild using array.length targeting the span
