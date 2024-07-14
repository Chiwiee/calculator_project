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

// Checking if there's a decimal point in Arrays
function checkDecimal() {
  if (
    firstNumber.includes(".") ||
    secondNumber.includes(".") ||
    calculatedValue.includes(".")
  ) {
    return operate(
      firstNumber,
      calculatedValue,
      operator,
      secondNumber
    ).toFixed(1);
  } else {
    return operate(firstNumber, calculatedValue, operator, secondNumber);
  }
}

// For Backspace Targeting
function lengthTotal(firstNumber, secondNumber, operator) {
  if (operator != "") {
    return firstNumber.length + secondNumber.length + 1;
  } else {
    return firstNumber.length + secondNumber.length;
  }
}
function displayTextContent(id, code) {
  console.log(" ");
  console.log(code);
  const content = document.querySelector(".text");
  const result = document.querySelector(".result");
  const previous = document.querySelector(".previous");
  const textContainer = document.querySelector("#text-content");
  const firstDot = firstNumber.slice(-1) != ".";
  const secondDot = secondNumber.slice(-1) != ".";
  let number = lengthTotal(firstNumber, secondNumber, operator);
  const text = document.querySelector(".text");
  const textChildren =
    document.querySelector(".text").children[`${number - 1}`];

  // If Statement for TextContent and to Push Values to an Array
  if (id == "zero" || code == "Numpad0") {
    const zero = document.createElement("span");
    zero.textContent = "0";
    zero.classList = `num${number}`;
    content.appendChild(zero);
    if (operator == "") {
      firstNumber.push(0);
    } else if (operator != "") {
      secondNumber.push(0);
    }
  }
  if (id == "one" || code == "Numpad1") {
    const one = document.createElement("span");
    one.textContent = "1";
    one.classList = `num${number}`;
    content.appendChild(one);
    if (operator == "") {
      firstNumber.push(1);
    } else if (operator != "") {
      secondNumber.push(1);
    }
  }
  if (id == "two" || code == "Numpad2") {
    const two = document.createElement("span");
    two.textContent = "2";
    two.classList = `num${number}`;
    content.appendChild(two);
    if (operator == "") {
      firstNumber.push(2);
    } else if (operator != "") {
      secondNumber.push(2);
    }
  }

  if (id == "three" || code == "Numpad3") {
    const three = document.createElement("span");
    three.textContent = "3";
    three.classList = `num${number}`;
    content.appendChild(three);
    if (operator == "") {
      firstNumber.push(3);
    } else if (operator != "") {
      secondNumber.push(3);
    }
  }

  if (id == "four" || code == "Numpad4") {
    const four = document.createElement("span");
    four.textContent = "4";
    four.classList = `num${number}`;
    content.appendChild(four);
    if (operator == "") {
      firstNumber.push(4);
    } else if (operator != "") {
      secondNumber.push(4);
    }
  }

  if (id == "five" || code == "Numpad5") {
    const five = document.createElement("span");
    five.textContent = "5";
    five.classList = `num${number}`;
    content.appendChild(five);
    if (operator == "") {
      firstNumber.push(5);
    } else if (operator != "") {
      secondNumber.push(5);
    }
  }

  if (id == "six" || code == "Numpad6") {
    const six = document.createElement("span");
    six.textContent = "6";
    six.classList = `num${number}`;
    content.appendChild(six);
    if (operator == "") {
      firstNumber.push(6);
    } else if (operator != "") {
      secondNumber.push(6);
    }
  }

  if (id == "seven" || code == "Numpad7") {
    const seven = document.createElement("span");
    seven.textContent = "7";
    seven.classList = `num${number}`;
    content.appendChild(seven);
    if (operator == "") {
      firstNumber.push(7);
    } else if (operator != "") {
      secondNumber.push(7);
    }
  }

  if (id == "eight" || code == "Numpad8") {
    const eight = document.createElement("span");
    eight.textContent = "8";
    eight.classList = `num${number}`;
    content.appendChild(eight);
    if (operator == "") {
      firstNumber.push(8);
    } else if (operator != "") {
      secondNumber.push(8);
    }
  }

  if (id == "nine" || code == "Numpad9") {
    const nine = document.createElement("span");
    nine.textContent = "9";
    nine.classList = `num${number}`;
    content.appendChild(nine);
    if (operator == "") {
      firstNumber.push(9);
    } else if (operator != "") {
      secondNumber.push(9);
    }
  }
  if (id == "dot" || code == "NumpadDecimal") {
    const dot = document.createElement("span");
    dot.textContent = ".";
    dot.classList = `num${number}`;

    if (operator == "") {
      if (firstDot == true) {
        firstNumber.push(".");
        content.appendChild(dot);
      }
    } else if (operator != "") {
      if (secondDot == true) {
        secondNumber.push(".");
        content.appendChild(dot);
      }
    }
  }

  // Operator, Equal and Clear

  if (id == "plus" || code == "NumpadAdd") {
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
  if (id == "minus" || code == "NumpadSubtract") {
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
  if (id == "times" || code == "NumpadMultiply") {
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
  if (id == "divide" || code == "NumpadDivide") {
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
  if (id == "equal" || code == "NumpadEnter") {
    let sum = checkDecimal();

    if (sum == undefined) {
      result.textContent = "0";
    } else if (sum != undefined) {
      result.textContent = `${sum}`;
      content.textContent = `${sum}`;
    }

    calculatedValue.push(sum);
    operator = "";
    firstNumber.splice(0, firstNumber.length);
    secondNumber.splice(0, secondNumber.length);
    calculatedValue.splice(0, calculatedValue.length - 1);
  }
  if (id == "clear" || code == "Escape") {
    content.textContent = "";
    result.textContent = "";
    operator = "";
    number = "0";
    firstNumber.splice(0, firstNumber.length);
    secondNumber.splice(0, secondNumber.length);
    calculatedValue.splice(0, calculatedValue.length);
  }
  if (id == "backspace" || code == "Backspace") {
    text.removeChild(textChildren);
    console.log(text);
    if (operator == "") {
      firstNumber.splice(number - 1, 1);
    } else if (operator != "" && secondNumber.length == "0") {
      operator = "";
    } else if (operator != "") {
      secondNumber.splice(secondNumber.length - 1, 1);
    }
  }
  console.log(" ");
  console.log(`firstNumber: ${firstNumber}`);
  console.log(`secondNumber: ${secondNumber}`);
  console.log(`calculatedValue ${calculatedValue}`);
  console.log(`operator: ${operator}`);
  console.log(`Numbers Length: ${number}`);
  console.log(text);
}

// Functions that Display Text Content and Push Value to an Array
function buttonEvents() {
  function mouseEvents() {
    let buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        displayTextContent(button.id);
      });
    });
  }
  mouseEvents();
  function keyboardEvents() {
    window.addEventListener("keydown", (event) => {
      displayTextContent((id = ""), event.code);
    });
  }
  keyboardEvents();
}

buttonEvents();

// create new variable for sum value then create new function to calculate the sum value to the new number
// add splice + if statement show => "..." in show content to only show latest number

//everytime you created a span add class id that use array.length/
//backspace removeChild using array.length targeting the span
