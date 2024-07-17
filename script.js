const textDisplay = document.querySelector(".text");
const resultDisplay = document.querySelector(".result");

// // Store Values
let firstNumber = "";
let operator = "";
let secondNumber = "";
let forLength = "";
// const calculatedValue = [];
// let operatorText = "";
// let textContent = "";
// let numberIncrement = 0;

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
  return parseFloat(firstNumber) / parseFloat(secondNumber);
}

// Operate Function that Converts and Calls Functions to Calculate
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
  forLength += `${operate()}`;
  if (forLength.length <= 20) {
    resultDisplay.textContent = `${forLength.slice(0, 20)}`;
    resultDisplay.setAttribute("style", "font-size: 28px;");
  } else if (forLength.length > 20) {
    resultDisplay.textContent = `${forLength.slice(0, 20)}` + "...";
    resultDisplay.setAttribute("style", "font-size: 25px; overflow: hidden;");
  }
  firstNumber = `${operate()}`;
  secondNumber = "";
  operator = "";
}

// function removeFirstChild() {
//   if (lengthTotal(firstNumber, secondNumber, operator) > 22) {
//     let parent = document.querySelector(".text");
//     let child = document.querySelector(".text").children[0];
//     parent.removeChild(child);
//   }
// }
// // Change font-size depending on how many text is in Result TextContent
// function limitResultText() {
//   const result = document.querySelector(".result");
//   if (calculatedValue.toString().length <= 10) {
//     result.setAttribute("style", "font-size: 60px");
//   } else if (calculatedValue.toString().length <= 15) {
//     result.setAttribute("style", "font-size: 40px");
//   } else if (calculatedValue.toString().length <= 20) {
//     result.setAttribute("style", "font-size: 28px");
//   } else if (calculatedValue.toString().length <= 30) {
//     result.setAttribute("style", "font-size: 26px");
//   } else if (calculatedValue.toString().length > 30) {
//     result.setAttribute("style", "font-size: 17px; overflow: auto;");
//   }
// }

// // For Backspace Targeting
// function lengthTotal(firstNumber, secondNumber, operator) {
//   if (operator != "") {
//     return firstNumber.length + secondNumber.length + 1;
//   } else {
//     return firstNumber.length + secondNumber.length;
//   }
// }
// // Show your calculation history like = 1 + 1 or 100*3218, etc, etc.
// function calcContent(num) {
//   const previous = document.querySelector(".previous");
//   const children = document.querySelector(".previous").children[0];
//   const list = document.createElement("li");
//   list.textContent = `${textContent}`;
//   list.classList = `prev${numberIncrement}`;
//   previous.appendChild(list);
//   numberIncrement++;
//   if (num > 5) {
//     previous.removeChild(children);
//   }
// }
// // Remove previous content result
// function clearContent() {
//   document.querySelector(".result").textContent = "";
//   document.querySelector(".text").textContent = "";

//   const calculationContent = document.querySelector(".text");
//   while (calculationContent.hasChildNodes()) {
//     calculationContent.removeChild(calculationContent.children[0]);
//   }
//   const previousList = document.querySelector(".previous");
//   while (previousList.hasChildNodes()) {
//     previousList.removeChild(previousList.children[0]);
//   }
// }

// // Operators Text Content Function
// let numberTotal = operate(firstNumber, calculatedValue, operator, secondNumber);
// const content = document.querySelector(".text");

// //
function displayTextContent(id, code) {
  function convertToNumber() {
    if (id == "one") {
      return 1;
    } else if (id == "two") {
      return 2;
    } else if (id == "three") {
      return 3;
    } else if (id == "four") {
      return 4;
    } else if (id == "five") {
      return 5;
    } else if (id == "six") {
      return 6;
    } else if (id == "seven") {
      return 7;
    } else if (id == "eight") {
      return 8;
    } else if (id == "nine" || code == "Digit9") {
      return 9;
    } else {
      return "";
    }
  }
  function convertToSymbol() {
    if (id == "plus") {
      return "+";
    } else if (id == "minus") {
      return "-";
    } else if (id == "times") {
      return "×";
    } else if (id == "divide") {
      return "÷";
    } else {
      return "";
    }
  }

  // Number Creator
  if (id == "zero") {
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
    if (firstNumber == "" && operator == "") {
      // Add operator like +1
      firstNumber += convertToSymbol();
    } else if (firstNumber != "" && operator == "") {
      // Add operator like +1 +
      operator += convertToSymbol();
    } else if (firstNumber != "" && operator != "" && secondNumber == "") {
      // Add operator like +1 + -1
      secondNumber += convertToSymbol();
    }
  }

  if (id == "equal") {
    if (firstNumber != "" && operator != "" && secondNumber != "") {
      forLength += `${operate()}`;
      if (forLength.length <= 20) {
        resultDisplay.textContent = `${forLength.slice(0, 20)}`;
        resultDisplay.setAttribute("style", "font-size: 28px;");
      } else if (forLength.length > 20) {
        resultDisplay.textContent = `${forLength.slice(0, 20)}` + "...";
        resultDisplay.setAttribute(
          "style",
          "font-size: 25px; overflow: hidden;"
        );
      }
      firstNumber = `${operate()}`;
      secondNumber = "";
      operator = "";
    }
  }

  // Temporary Function
  function temporaryTextDisplay() {
    textDisplay.textContent = `${combinedString()}`;
  }
  temporaryTextDisplay();
  console.log(id);
  console.log(`firstNumber: ${firstNumber}`);
  console.log(`secondNumber: ${secondNumber}`);
  console.log(`operator: ${operator}`);
  console.log(`CombinedString: ${combinedString()}`);
  console.log(`Combined Length: ${combinedString().length - 2}`);
  console.log(`Sum Value: ${operate()}`);
  console.log(`forLength: ${forLength}`);
  console.log(`forLength Length: ${forLength.length}`);
}
//   // Variables
//   let sumValue = operate(firstNumber, calculatedValue, operator, secondNumber);
//   let numberTotal = lengthTotal(firstNumber, secondNumber, operator);
//   const content = document.querySelector(".text");
//   const result = document.querySelector(".result");
//   const firstDot = firstNumber.slice(-1) != ".";
//   const secondDot = secondNumber.slice(-1) != ".";
//   const text = document.querySelector(".text");
//   const textChildren =
//     document.querySelector(".text").children[`${numberTotal - 1}`];

//   // Function
//   function operatorsTextContent() {
//     if (id == "plus" || code == "NumpadAdd") {
//       const plus = document.createElement("span");
//       plus.textContent = " + ";
//       plus.classList = `num${numberTotal}`;
//       content.appendChild(plus);
//       operator = "plus";
//       textContent += " + ";
//     } else if (id == "minus" || code == "NumpadSubtract") {
//       const minus = document.createElement("span");
//       minus.textContent = " - ";
//       minus.classList = `num${numberTotal}`;
//       content.appendChild(minus);
//       operator = "minus";
//       textContent += " - ";
//     } else if (id == "times" || code == "NumpadMultiply") {
//       const times = document.createElement("span");
//       times.textContent = " x ";
//       times.classList = `num${numberTotal}`;
//       content.appendChild(times);
//       operator = "times";
//       textContent += " × ";
//     } else if (id == "divide" || code == "NumpadDivide") {
//       const divide = document.createElement("span");
//       divide.textContent = " ÷ ";
//       divide.classList = `num${numberTotal}`;
//       content.appendChild(divide);
//       operator = "divide";
//       textContent += " ÷ ";
//     }
//   }

//   function operatorsNotEqual() {
//     operator = "";
//     calcContent(numberIncrement);
//     calculatedValue.push(sumValue);
//     firstNumber.splice(0, firstNumber.length);
//     secondNumber.splice(0, secondNumber.length);
//     calculatedValue.splice(0, calculatedValue.length - 1);
//     if (
//       firstNumber.includes(".") ||
//       secondNumber.includes(".") ||
//       calculatedValue.includes(".")
//     ) {
//       content.textContent = `${sumValue.toFixed(3)}`;
//       result.textContent = `${sumValue.toFixed(3)}`;
//       textContent = "";
//       textContent += `${sumValue.toFixed(3)}`;
//     } else {
//       content.textContent = `${sumValue}`;
//       result.textContent = `${sumValue}`;
//       textContent = "";
//       textContent += `${sumValue}`;
//     }
//   }

//   // If Statements

//   // Need to add zero because it returns undefined in convert

//   // Operator Statements
//   if (id == "plus" || code == "NumpadAdd") {
//     if (operator == "") {
//       operatorsTextContent();
//     } else if (operate != "") {
//       operatorsNotEqual();
//       operatorsTextContent();
//     }
//   }
//   if (id == "minus" || code == "NumpadSubtract") {
//     if (operator == "") {
//       operatorsTextContent();
//     } else if (operator != "") {
//       operatorsNotEqual();
//       operatorsTextContent();
//     }
//   }
//   if (id == "times" || code == "NumpadMultiply") {
//     if (operator == "") {
//       operatorsTextContent();
//     } else if (operator != "") {
//       operatorsNotEqual();
//       operatorsTextContent();
//     }
//   }
//   if (id == "divide" || code == "NumpadDivide") {
//     if (operator == "") {
//       operatorsTextContent();
//     } else if (operator != "") {
//       operatorsNotEqual();
//       operatorsTextContent();
//     }
//   }
//   // Decimal, Equal, Clear and Backspace Statements
//   if (id == "dot" || code == "NumpadDecimal" || code == "Period") {
//     if (firstNumber.length != "0") {
//       const dot = document.createElement("span");
//       dot.textContent = ".";
//       dot.classList = `num${numberTotal}`;
//       if (operator == "") {
//         if (firstDot == true) {
//           firstNumber.push(".");
//           textContent += ".";
//           content.appendChild(dot);
//         }
//       } else if (operator != "" && Boolean(calculatedValue[0]) == false) {
//         if (secondDot == true) {
//           secondNumber.push(".");
//           textContent += ".";
//           content.appendChild(dot);
//         }
//       }
//     }
//   }

//   if (id == "equal" || code == "Enter" || code == "NumpadEnter") {
//     if (Boolean(sumValue != undefined && sumValue != NaN) === true) {
//       calcContent(numberIncrement);
//       if (
//         firstNumber.includes(".") ||
//         secondNumber.includes(".") ||
//         calculatedValue.includes(".")
//       ) {
//         result.textContent = `${sumValue.toFixed(3)}`;
//         content.textContent = `${sumValue.toFixed(3)}`;
//         calculatedValue.push(sumValue.toFixed(3));
//         textContent = "";
//         textContent += `${sumValue.toFixed(3)}`;
//       } else {
//         result.textContent = `${sumValue}`;
//         content.textContent = `${sumValue}`;
//         calculatedValue.push(sumValue);
//         textContent = "";
//         textContent += `${sumValue}`;
//       }
//       operator = "";
//       firstNumber.splice(0, firstNumber.length);
//       secondNumber.splice(0, secondNumber.length);
//       calculatedValue.splice(0, calculatedValue.length - 1);
//     }
//   }
//   if (id == "clear" || code == "Escape") {
//     if (Boolean(document.querySelector(".previous").children[0]) == true) {
//       clearContent();
//     }
//     content.textContent = "";
//     result.textContent = "0";
//     operator = "";
//     textContent = "";
//     numberTotal = 0;
//     numberIncrement = 0;
//     firstNumber.splice(0, firstNumber.length);
//     secondNumber.splice(0, secondNumber.length);
//     calculatedValue.splice(0, calculatedValue.length);
//   }
//   if (id == "backspace" || code == "Backspace") {
//     if (text.hasChildNodes()) {
//       text.removeChild(textChildren);
//     }
//     if (operator == "") {
//       firstNumber.splice(numberTotal - 1, 1);
//     } else if (operator != "" && secondNumber.length == "0") {
//       operator = "";
//     } else if (operator != "") {
//       secondNumber.splice(secondNumber.length - 1, 1);
//     }
//   }

//   // FirstNumber, Operator, SecondNumber and CalculatedValue
//   console.log("");
//   console.log("");
//   console.log("");
//   console.log("");
//   console.log("");
//   console.log("Numbers and Operators");

//   console.log(`calculatedValue ${calculatedValue}`);
//   console.log(`Check sumValue: ${sumValue}`);
//   console.log("");
//   // Text Content
//   console.log(`Text Content: ${textContent}`);
//   console.log(`Code: ${code}`);
//   console.log("");
//   // Numbers
//   console.log("Numbers");
//   console.log(`Sum Length: ${calculatedValue.toString().length}`);
//   console.log(`Sum Value: ${sumValue}`);
//   console.log(`Numbers Total: ${numberTotal}`);
//   console.log(`Number Increment: ${numberIncrement}`);
//   console.log("");
//   // QuerySelectors
//   console.log("QuerySelectors:");
//   console.log(document.querySelector(".previous"));
//   console.log(text);
//   console.log("");
//   //Boolean
//   console.log("Boolean");
//   console.log(Boolean(secondNumber[0]) == false);
//   console.log(
//     `QuerySelector Check: ${Boolean(
//       document.querySelector(".previous").children[0]
//     )}`
//   );
//   console.log(code);

//   // Function Call
//   removeFirstChild();
//   limitResultText();
// }

// Functions and Event Listeners that Calls the displayTextContent with button.id and event.code
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

// // create new variable for sum value then create new function to calculate the sum value to the new number
// // add splice + if statement show => "..." in show content to only show latest number

// //everytime you created a span add class id that use array.length/
// //backspace removeChild using array.length targeting the span
