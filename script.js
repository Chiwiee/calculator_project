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
    return "You can't divided by 0";
  } else {
    return firstNumber / secondNumber || sum / secondNumber;
  }
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
    result.setAttribute("style", "font-size: 17px; overflow: auto;");
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
  document.querySelector(".result").textContent = "";
  document.querySelector(".text").textContent = "";

  const calculationContent = document.querySelector(".text");
  while (calculationContent.hasChildNodes()) {
    calculationContent.removeChild(calculationContent.children[0]);
  }
  const previousList = document.querySelector(".previous");
  while (previousList.hasChildNodes()) {
    previousList.removeChild(previousList.children[0]);
  }
}

// Operators Text Content Function
let numberTotal = operate(firstNumber, calculatedValue, operator, secondNumber);
const content = document.querySelector(".text");
//
function plusTextContent() {
  const plus = document.createElement("span");
  plus.textContent = " + ";
  plus.classList = `num${numberTotal}`;
  content.appendChild(plus);
  operator = "plus";
  textContent += " + ";
}
function minusTextContent() {
  const minus = document.createElement("span");
  minus.textContent = " - ";
  minus.classList = `num${numberTotal}`;
  content.appendChild(minus);
  operator = "minus";
  textContent += " - ";
}
function timesTextContent() {
  const times = document.createElement("span");
  times.textContent = " x ";
  times.classList = `num${numberTotal}`;
  content.appendChild(times);
  operator = "times";
  textContent += " × ";
}
function divideTextContent() {
  const divide = document.createElement("span");
  divide.textContent = " ÷ ";
  divide.classList = `num${numberTotal}`;
  content.appendChild(divide);
  operator = "divide";
  textContent += " ÷ ";
}

//
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
    operator = "";
    calcCOntent(numberIncrement);
    calculatedValue.push(sumValue);
    firstNumber.splice(0, firstNumber.length);
    secondNumber.splice(0, secondNumber.length);
    calculatedValue.splice(0, calculatedValue.length - 1);
    if (
      firstNumber.includes(".") ||
      secondNumber.includes(".") ||
      calculatedValue.includes(".")
    ) {
      content.textContent = `${sumValue.toFixed(3)}`;
      result.textContent = `${sumValue.toFixed(3)}`;
      textContent = "";
      textContent += `${sumValue.toFixed(3)}`;
    } else {
      content.textContent = `${sumValue}`;
      result.textContent = `${sumValue}`;
      textContent = "";
      textContent += `${sumValue}`;
    }
  }

  function convertToNumber() {
    if (id == "one" || code == "Numpad1" || code == "Digit1") {
      return 1;
    } else if (id == "two" || code == "Numpad2" || code == "Digit2") {
      return 2;
    } else if (id == "three" || code == "Numpad3" || code == "Digit3") {
      return 3;
    } else if (id == "four" || code == "Numpad4" || code == "Digit4") {
      return 4;
    } else if (id == "five" || code == "Numpad5" || code == "Digit5") {
      return 5;
    } else if (id == "six" || code == "Numpad6" || code == "Digit6") {
      return 6;
    } else if (id == "seven" || code == "Numpad7" || code == "Digit7") {
      return 7;
    } else if (id == "eight" || code == "Numpad8" || code == "Digit8") {
      return 8;
    } else if (id == "nine" || code == "Numpad9" || code == "Digit9") {
      return 9;
    } else {
      return "";
    }
  }
  console.log(`Numbers: ${convertToNumber()}`);

  // Need to add zero because it returns undefined in convert
  if (id == "zero" || code == "Numpad0" || code == "Digit0") {
    const zero = document.createElement("span");
    zero.textContent = "0";
    zero.classList = `num${numberTotal}`;
    content.appendChild(zero);
    if (operator == "") {
      firstNumber.push(0);
      textContent += 0;
    } else if (operator != "") {
      secondNumber.push(0);
      textContent += 0;
    }
  } else if ((id = id || code == code) && convertToNumber() != "") {
    if (convertToNumber() != "") {
      const contentX = document.createElement("span");
      contentX.textContent = `${convertToNumber()}`;
      contentX.classList = `num${numberTotal}`;
      content.appendChild(contentX);
      if (operator == "") {
        firstNumber.push(convertToNumber());
        textContent += convertToNumber();
      } else if (operator != "") {
        secondNumber.push(convertToNumber());
        textContent += convertToNumber();
      }
    }
  }

  // Operator, Equal, Clear, Backspace, Decimal
  if (id == "dot" || code == "NumpadDecimal" || code == "Period") {
    if (firstNumber.length != "0") {
      const dot = document.createElement("span");
      dot.textContent = ".";
      dot.classList = `num${numberTotal}`;
      if (operator == "") {
        if (firstDot == true) {
          firstNumber.push(".");
          textContent += ".";
          content.appendChild(dot);
        }
      } else if (operator != "" && secondNumber.length != "0") {
        if (secondDot == true) {
          secondNumber.push(".");
          textContent += ".";
          content.appendChild(dot);
        }
      }
    }
  }

  // Operator Statements
  if (id == "plus" || code == "NumpadAdd") {
    if (operator == "") {
      plusTextContent();
    } else if (operate != "") {
      operatorsNotEqual();
      plusTextContent();
    }
  }
  if (id == "minus" || code == "NumpadSubtract") {
    if (operator == "") {
      minusTextContent();
    } else if (operator != "") {
      operatorsNotEqual();
      minusTextContent();
    }
  }
  if (id == "times" || code == "NumpadMultiply") {
    if (operator == "") {
      timesTextContent();
    } else if (operator != "") {
      operatorsNotEqual();
      timesTextContent();
    }
  }
  if (id == "divide" || code == "NumpadDivide") {
    if (operator == "") {
      divideTextContent();
    } else if (operator != "") {
      operatorsNotEqual();
      divideTextContent;
    }
  }
  if (id == "equal" || code == "Enter" || code == "NumpadEnter") {
    if (Boolean(sumValue != undefined && sumValue != NaN) === true) {
      calcCOntent(numberIncrement);
      if (
        firstNumber.includes(".") ||
        secondNumber.includes(".") ||
        calculatedValue.includes(".")
      ) {
        result.textContent = `${sumValue.toFixed(3)}`;
        content.textContent = `${sumValue.toFixed(3)}`;
        calculatedValue.push(sumValue.toFixed(3));
        textContent = "";
        textContent += `${sumValue.toFixed(3)}`;
      } else {
        result.textContent = `${sumValue}`;
        content.textContent = `${sumValue}`;
        calculatedValue.push(sumValue);
        textContent = "";
        textContent += `${sumValue}`;
      }
      operator = "";
      firstNumber.splice(0, firstNumber.length);
      secondNumber.splice(0, secondNumber.length);
      calculatedValue.splice(0, calculatedValue.length - 1);
    }
  }
  if (id == "clear" || code == "Escape") {
    if (Boolean(document.querySelector(".previous").children[0]) == true) {
      clearContent();
    }
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
  if (id == "backspace" || code == "Backspace") {
    if (text.hasChildNodes()) {
      text.removeChild(textChildren);
    }
    if (operator == "") {
      firstNumber.splice(numberTotal - 1, 1);
    } else if (operator != "" && secondNumber.length == "0") {
      operator = "";
    } else if (operator != "") {
      secondNumber.splice(secondNumber.length - 1, 1);
    }
  }
  // FirstNumber, Operator, SecondNumber and CalculatedValue
  console.log("");
  console.log("Numbers and Operators");
  console.log(`firstNumber: ${firstNumber}`);
  console.log(`secondNumber: ${secondNumber}`);
  console.log(`calculatedValue ${calculatedValue}`);
  console.log(`operator: ${operator}`);
  console.log(`Check sumValue: ${sumValue}`);
  console.log("");
  // Text Content
  console.log(`Text Content: ${textContent}`);
  console.log(`Code: ${code}`);
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
  console.log(Boolean(secondNumber[0]) == false);
  console.log(
    `QuerySelector Check: ${Boolean(
      document.querySelector(".previous").children[0]
    )}`
  );
  console.log(code);

  // Function Call
  removeFirstChild();
  limitResultText();
}

// Functions andEvent Listeners that Calls the displayTextContent with button.id and event.code
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
