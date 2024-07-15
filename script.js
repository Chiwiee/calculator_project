// Store Values
const firstNumber = [];
const secondNumber = [];
const calculatedValue = [];
let operator = "";
let textContent = "";
let numberIncrement = 0;

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
    return "You can't divide by 0";
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
function removeFirstChild() {
  if (lengthTotal(firstNumber, secondNumber, operator) > 22) {
    let parent = document.querySelector(".text");
    let child = document.querySelector(".text").children[0];
    parent.removeChild(child);
  }
}
// Change font-size depending on how many text is in Result TextContent
function limitResultText() {
  const result = document.querySelector(".result");
  if (calculatedValue.toString().length <= 10) {
    result.setAttribute("style", "font-size: 60px");
  } else if (calculatedValue.toString().length <= 15) {
    result.setAttribute("style", "font-size: 40px");
  } else if (calculatedValue.toString().length <= 20) {
    result.setAttribute("style", "font-size: 28px");
  } else if (calculatedValue.toString().length <= 30) {
    result.setAttribute("style", "font-size: 26px");
  } else if (calculatedValue.toString().length > 30) {
    result.setAttribute("style", "font-size: 17px");
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
// Show your calculation history like = 1 + 1 or 100*3218, etc, etc.
function calcCOntent(num) {
  const previous = document.querySelector(".previous");
  const children = document.querySelector(".previous").children[0];
  const list = document.createElement("li");
  list.textContent = `${textContent}`;
  list.classList = `prev${numberIncrement}`;
  previous.appendChild(list);
  numberIncrement++;
  if (num > 5) {
    previous.removeChild(children);
  }
}
// Remove previous content result
function clearContent() {
  for (let i = 0; i < 6; i++) {
    const previous = document.querySelector(".previous");
    const children = document.querySelector(".previous").children[0];
    previous.removeChild(children);
  }
}

function displayTextContent(id, code) {
  let sumValue = operate(firstNumber, calculatedValue, operator, secondNumber);
  let numberTotal = lengthTotal(firstNumber, secondNumber, operator);
  const content = document.querySelector(".text");
  const result = document.querySelector(".result");
  const firstDot = firstNumber.slice(-1) != ".";
  const secondDot = secondNumber.slice(-1) != ".";
  const text = document.querySelector(".text");
  const textChildren =
    document.querySelector(".text").children[`${numberTotal - 1}`];

  function operatorsNotEqual() {
    content.textContent = `${sumValue}`;
    result.textContent = `${sumValue}`;
    calcCOntent(numberIncrement);
    textContent = "";
    textContent += `${sumValue}`;
    calculatedValue.push(sumValue);
    operator = "";
    firstNumber.splice(0, firstNumber.length);
    secondNumber.splice(0, secondNumber.length);
    calculatedValue.splice(0, calculatedValue.length - 1);
  }

  // If Statement for TextContent and to Push Values to an Array
  if (id == "zero" || code == "Numpad0" || code == "Digit0") {
    const zero = document.createElement("span");
    zero.textContent = "0";
    zero.classList = `num${numberTotal}`;
    content.appendChild(zero);
    if (operator == "") {
      firstNumber.push(0);
      textContent += 0;
      if (Boolean(calculatedValue[0]) == true) {
        alert("Halo");
      }
    } else if (operator != "") {
      secondNumber.push(0);
      textContent += 0;
    }
  }
  if (id == "one" || code == "Numpad1" || code == "Digit1") {
    const one = document.createElement("span");
    one.textContent = "1";
    one.classList = `num${numberTotal}`;
    content.appendChild(one);
    if (operator == "") {
      firstNumber.push(1);
      textContent += 1;
    } else if (operator != "") {
      secondNumber.push(1);
      textContent += 1;
    }
  }
  if (id == "two" || code == "Numpad2" || code == "Digit2") {
    const two = document.createElement("span");
    two.textContent = "2";
    two.classList = `num${numberTotal}`;
    content.appendChild(two);
    if (operator == "") {
      firstNumber.push(2);
      textContent += 2;
    } else if (operator != "") {
      secondNumber.push(2);
      textContent += 2;
    }
  }

  if (id == "three" || code == "Numpad3" || code == "Digit3") {
    const three = document.createElement("span");
    three.textContent = "3";
    three.classList = `num${numberTotal}`;
    content.appendChild(three);
    if (operator == "") {
      firstNumber.push(3);
      textContent += 3;
    } else if (operator != "") {
      secondNumber.push(3);
      textContent += 3;
    }
  }

  if (id == "four" || code == "Numpad4" || code == "Digit4") {
    const four = document.createElement("span");
    four.textContent = "4";
    four.classList = `num${numberTotal}`;
    content.appendChild(four);
    if (operator == "") {
      firstNumber.push(4);
      textContent += 4;
    } else if (operator != "") {
      secondNumber.push(4);
      textContent += 4;
    }
  }

  if (id == "five" || code == "Numpad5" || code == "Digit5") {
    const five = document.createElement("span");
    five.textContent = "5";
    five.classList = `num${numberTotal}`;
    content.appendChild(five);
    if (operator == "") {
      firstNumber.push(5);
      textContent += 5;
    } else if (operator != "") {
      secondNumber.push(5);
      textContent += 5;
    }
  }

  if (id == "six" || code == "Numpad6" || code == "Digit6") {
    const six = document.createElement("span");
    six.textContent = "6";
    six.classList = `num${numberTotal}`;
    content.appendChild(six);
    if (operator == "") {
      firstNumber.push(6);
      textContent += 6;
    } else if (operator != "") {
      secondNumber.push(6);
      textContent += 6;
    }
  }

  if (id == "seven" || code == "Numpad7" || code == "Digit7") {
    const seven = document.createElement("span");
    seven.textContent = "7";
    seven.classList = `num${numberTotal}`;
    content.appendChild(seven);
    if (operator == "") {
      firstNumber.push(7);
      textContent += 7;
    } else if (operator != "") {
      secondNumber.push(7);
      textContent += 7;
    }
  }

  if (id == "eight" || code == "Numpad8" || code == "Digit8") {
    const eight = document.createElement("span");
    eight.textContent = "8";
    eight.classList = `num${numberTotal}`;
    content.appendChild(eight);
    if (operator == "") {
      firstNumber.push(8);
      textContent += 8;
    } else if (operator != "") {
      secondNumber.push(8);
      textContent += 8;
    }
  }

  if (id == "nine" || code == "Numpad9" || code == "Digit9") {
    const nine = document.createElement("span");
    nine.textContent = "9";
    nine.classList = `num${numberTotal}`;
    content.appendChild(nine);
    if (operator == "") {
      firstNumber.push(9);
      textContent += 9;
    } else if (operator != "") {
      secondNumber.push(9);
      textContent += 9;
    }
  }
  if (id == "dot" || code == "NumpadDecimal") {
    if (firstNumber.length != "0") {
      const dot = document.createElement("span");
      dot.textContent = ".";
      dot.classList = `num${numberTotal}`;

      if (operator == "") {
        if (firstDot == true) {
          firstNumber.push(".");
          content.appendChild(dot);
        }
      } else if (operator != "" && secondNumber.length != "0") {
        if (secondDot == true) {
          secondNumber.push(".");
          content.appendChild(dot);
        }
      }
    }
  }

  // Operator, Equal and Clear

  if (id == "plus" || code == "NumpadAdd") {
    if (operator == "") {
      const plus = document.createElement("span");
      plus.textContent = " + ";
      plus.classList = `num${numberTotal}`;
      content.appendChild(plus);
      operator = "plus";
      textContent += " + ";
    } else if (operate != "") {
      operatorsNotEqual();
    }
  }
  if (id == "minus" || code == "NumpadSubtract") {
    if (operator == "") {
      const minus = document.createElement("span");
      minus.textContent = " - ";
      minus.classList = `num${numberTotal}`;
      content.appendChild(minus);
      operator = "minus";
      textContent += " - ";
    }
    else if (operator != "") {
      operatorsNotEqual()
    
  }
  if (id == "times" || code == "NumpadMultiply") {
    if (operator == "") {
      const times = document.createElement("span");
      times.textContent = " × ";
      times.classList = `num${numberTotal}`;
      content.appendChild(times);
      operator = "times";
    }
    else if (operator != "") {
      operatorsNotEqual()
    }
  }
  if (id == "divide" || code == "NumpadDivide") {
    if (operator == "") {
      const divide = document.createElement("span");
      divide.textContent = " ÷ ";
      divide.classList = `num${numberTotal}`;
      content.appendChild(divide);
      operator = "divide";
      textContent += " ÷ ";
    }
    else if (operator != "") {
      operatorsNotEqual()
    }
  }
  if (id == "equal" || code == "Enter" || code == "NumpadEnter") {
    let value = checkDecimal();
    result.textContent = `${value}`;
    content.textContent = `${value}`;
    calculatedValue.push(value);
    operator = "";
    calcCOntent(numberIncrement);
    textContent = "";
    textContent += `${sumValue}`;
    firstNumber.splice(0, firstNumber.length);
    secondNumber.splice(0, secondNumber.length);
    calculatedValue.splice(0, calculatedValue.length - 1);
  }
  if (id == "clear" || code == "Escape") {
    if (Boolean(document.querySelector(".previous").children[0]) == true) {
      clearContent();
    } else {
      content.textContent = "";
      result.textContent = "0";
      operator = "";
      textContent = "";
      numberTotal = 0;
      numberIncrement = 0;
      firstNumber.splice(0, firstNumber.length);
      secondNumber.splice(0, secondNumber.length);
      calculatedValue.splice(0, calculatedValue.length);
    }
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
  // FirstNumber, Operator, SecondNumber and CalculatedValue
  console.log("");
  console.log("");
  console.log("");
  console.log("");
  console.log("");
  console.log("Numbers and Operators");
  console.log(`firstNumber: ${firstNumber}`);
  console.log(`secondNumber: ${secondNumber}`);
  console.log(`calculatedValue ${calculatedValue}`);
  console.log(`operator: ${operator}`);
  console.log("");

  // Text Content
  console.log(`Text Content: ${textContent}`);
  console.log("");

  // Numbers
  console.log("Numbers");
  console.log(`Sum Length: ${calculatedValue.toString().length}`);
  console.log(`Sum Value: ${sumValue}`);
  console.log(`Numbers Total: ${numberTotal}`);
  console.log(`Number Increment: ${numberIncrement}`);
  console.log("");
  // QuerySelectors
  console.log("QuerySelectors:");
  console.log(document.querySelector(".previous"));
  console.log(text);
  console.log("");
  //Boolean
  console.log("Boolean");
  console.log(
    `QuerySelector Check: ${Boolean(
      document.querySelector(".previous").children[0]
    )}`
  );
  // Function Call
  removeFirstChild();
  limitResultText();
}

// Functions andEvent Listeners that Calls the displayTextContent with button.id and event.code arguments
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
