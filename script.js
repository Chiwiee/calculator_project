const textDisplay = document.querySelector(".text");
const resultDisplay = document.querySelector(".result");
const historyDisplay = document.querySelector(".previous");
const buttonContainer = document.querySelector("#button-container");
const equal = document.querySelector("#equal");
//
const list = document.createElement("li");
//
const clear = document.querySelector("#clear");
let btn = document.querySelectorAll("button");

let firstNumber = "";
let operator = "";
let secondNumber = "";
let result = "";
let incrementNumber = 0;

// Function that Calculate the Values from Operate Function
function add() {
  return parseFloat(firstNumber) + parseFloat(secondNumber);
}
function subtract() {
  return parseFloat(firstNumber) - parseFloat(secondNumber);
}
function multiply() {
  return parseFloat(firstNumber) * parseFloat(secondNumber);
}
function divide() {
  if (firstNumber == 0 || secondNumber == 0) {
    return "SIKE";
  } else {
    return parseFloat(firstNumber) / parseFloat(secondNumber);
  }
}

// Calls Functions to Calculate
function operate() {
  switch (operator) {
    case "+":
      return add();
    case "-":
      return subtract();
    case "×":
      return multiply();
    case "÷":
      return divide();
  }
}
function combinedString() {
  return `${firstNumber}` + ` ${operator} ` + `${secondNumber}`;
}

function calcAfterClick() {
  displayCalcHistory();
  if (firstNumber.includes(".") || secondNumber.includes(".")) {
    result = `${operate().toFixed(5)}`;
  } else {
    result = `${operate()}`;
  }
  if (result.length <= 20) {
    resultDisplay.textContent = `${result.slice(0, 20)}`;
    resultDisplay.setAttribute("style", "font-size: 28px;");
  } else if (result.length > 20) {
    resultDisplay.textContent = `${result.slice(0, 20)}` + "...";
    resultDisplay.setAttribute("style", "font-size: 25px; overflow: hidden;");
  }
  firstNumber = `${operate()}`;
  secondNumber = "";
  operator = "";
  incrementNumber++;
}

function displayCalcHistory() {
  list.textContent = `${combinedString()}`;
  list.classList = `num${incrementNumber}`;
  historyDisplay.appendChild(list);

  if (Boolean(historyDisplay.children[4]) == true) {
    historyDisplay.removeChild(historyDisplay.children[0]);
  }
}

function showTextDisplay() {
  if (combinedString().length - 2 >= 22) {
    textDisplay.textContent = `${combinedString().slice(-22)}` + "...";
  } else {
    textDisplay.textContent = `${combinedString().slice(-22)}`;
  }
}

function disableBtn() {
  resultDisplay.textContent = "SIKE";
  resultDisplay.style.fontSize = "70px";
  firstNumber = "";
  secondNumber = "";
  operator = "";

  btn.forEach((buttons) => {
    buttons.disabled = true;
    buttons.style.color = "grey";
  });
  clear.id = "disabledClear";
  clear.style.color = "white";
  clear.disabled = false;
  equal.id = "disabledEqual";
}
function enableBtn() {
  resultDisplay.textContent = "0";
  resultDisplay.removeAttribute("style");

  btn.forEach((button) => {
    button.disabled = false;
    button.removeAttribute("style");
  });
  clear.removeAttribute("style");
  clear.id = "clear";
  equal.id = "equal";
}
//
function createBtnAndOpr(id, code) {
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
  function convertToSymbol() {
    if (id == "plus" || code == "NumpadAdd") {
      return "+";
    } else if (id == "minus" || code == "NumpadSubtract") {
      return "-";
    } else if (id == "times" || code == "NumpadMultiply") {
      return "×";
    } else if (id == "divide" || code == "NumpadDivide") {
      return "÷";
    } else {
      return "";
    }
  }

  // Number Creator
  if (id == "zero" || code == "Numpad0" || code == "Digit0") {
    if (operator == "") {
      firstNumber += 0;
    } else if (operator != "") {
      secondNumber += 0;
    }
  } else if (id == id && convertToNumber() != "") {
    if (operator == "") {
      firstNumber += convertToNumber();
    } else if (operator != "") {
      secondNumber += convertToNumber();
    }
  }
  // Operator Creator
  if (id == id && convertToSymbol() != "") {
    if (
      firstNumber == "" &&
      operator == "" &&
      convertToSymbol() != "÷" &&
      convertToSymbol() != "×"
    ) {
      // Add operator like +1
      firstNumber += convertToSymbol();
    } else if (firstNumber != "" && operator == "") {
      // Add operator like +1 +
      operator += convertToSymbol();
    } else if (
      firstNumber != "" &&
      operator != "" &&
      secondNumber == "" &&
      convertToSymbol() != "÷" &&
      convertToSymbol() != "×"
    ) {
      // Add operator like +1 + -1
      secondNumber += convertToSymbol();
    } else if (operate() != undefined && isNaN(operate()) === false) {
      // Acts like Equal ex. +1 + -1 = sum // also you can't spam operator like +1 - +1 - + x +
      calcAfterClick();
      operator += convertToSymbol();
    }
  }

  if (id == "dot" || code == "Period" || code == "NumpadDecimal") {
    if (operator == "" && firstNumber.slice(-1) != ".") {
      firstNumber += ".";
    } else if (operator != "" && secondNumber.slice(-1) != ".") {
      secondNumber += ".";
    }
  }

  if (id == "equal" || code == "Enter" || code == "NumpadEnter") {
    if (
      firstNumber != "" &&
      operator != "" &&
      secondNumber != "" &&
      isNaN(operate()) === false
    ) {
      calcAfterClick();
    } else if (operate() == "SIKE") {
      disableBtn();
    }
  }
  if (id == "clear" || id == "disabledClear" || code == "Escape") {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = "";
    incrementNumber = 0;
    textDisplay.textContent = "";
    resultDisplay.textContent = "0";
    resultDisplay.style.fontSize = "55px";

    while (historyDisplay.hasChildNodes()) {
      historyDisplay.removeChild(historyDisplay.children[0]);
    }

    enableBtn();
  }
  if (id == "backspace" || code == "Backspace") {
    if (operator == "" && secondNumber == "") {
      let backspace1 = firstNumber.slice(0, -1);
      firstNumber = backspace1;
    } else if (operator != "" && secondNumber == "") {
      operator = "";
    } else if (operator != "" && firstNumber != "") {
      let backspace2 = secondNumber.slice(0, -1);
      secondNumber = backspace2;
    }
  }

  console.log(`IncrementNumber: ${incrementNumber}`);
  console.log(`ID:${id}`);
  console.log(`Code: ${code}`);
  console.log(`firstNumber: ${firstNumber}`);
  console.log(`secondNumber: ${secondNumber}`);
  console.log(`operator: ${operator}`);
  console.log(`CombinedString: ${combinedString()}`);
  console.log(`Combined Length: ${combinedString().length - 2}`);
  console.log(`Sum Value: ${operate()}`);
  console.log(`result: ${result}`);
  console.log(`result Length: ${result.length}`);
  console.log(`is Sum Value NaN?: ${isNaN(operate())}`);
  console.log(`Slice1: ${firstNumber.slice(0, -1)}`);
  console.log(`Slice2: ${secondNumber.slice(0, -1)}`);

  // querySelector
  console.log(textDisplay);
  console.log(resultDisplay);
  console.log(historyDisplay);
  console.log(buttonContainer);

  // Boolean
  console.log(Boolean(historyDisplay.children[6]) == true);
  console.log();

  // Function Call
  showTextDisplay();
}

// Functions and Event Listeners that Calls the createBtnAndOpr with button.id and event.code arguments
function buttonEvents() {
  function mouseEvents() {
    let buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        createBtnAndOpr(button.id);
      });
    });
  }
  mouseEvents();
  function keyboardEvents() {
    window.addEventListener("keydown", (event) => {
      createBtnAndOpr((id = ""), event.code);
    });
  }
  keyboardEvents();
}
buttonEvents();
