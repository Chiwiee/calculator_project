const textDisplay = document.querySelector(".text");
const resultDisplay = document.querySelector(".result");
const historyDisplay = document.querySelector(".previous");
const buttonContainer = document.querySelector("#button-container");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
let btn = document.querySelectorAll("button");

let firstNumber = "";
let operator = "";
let secondNumber = "";
let result = "";
let incrementNumber = 0;

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
  const list = document.createElement("li");
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
    if (operator == "" && result == "") {
      firstNumber += convertToNumber();
    } else if (operator == "" && result != "") {
      firstNumber = "";
      result = "";
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
      convertToSymbol() != "×" &&
      convertToSymbol() != "+"
    ) {
      firstNumber += convertToSymbol();
    } else if (firstNumber != "" && operator == "") {
      operator += convertToSymbol();
    } else if (
      firstNumber != "" &&
      operator != "" &&
      secondNumber == "" &&
      convertToSymbol() != "÷" &&
      convertToSymbol() != "×" &&
      convertToSymbol() != "+"
    ) {
      secondNumber += convertToSymbol();
    } else if (operate() != undefined && isNaN(operate()) === false) {
      calcAfterClick();
      operator += convertToSymbol();
    }
  }

  if (id == "dot" || code == "Period" || code == "NumpadDecimal") {
    if (
      operator == "" &&
      !firstNumber.slice(0, firstNumber.length).includes(".")
    ) {
      firstNumber += ".";
    } else if (
      operator != "" &&
      !secondNumber.slice(0, secondNumber.length).includes(".")
    ) {
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

  // Function Call
  showTextDisplay();
}

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
