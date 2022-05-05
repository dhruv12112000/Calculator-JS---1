const defaultValue = 0;
let currentResult = defaultValue;

function getUserNum() {
  usNum = parseInt(userInput.value);
  return usNum;
}

function createOutput(oper, inival, finval) {
  const calcDescription = `${inival} ${oper} ${finval}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operationPerformed, newNumber, newResult, previousResult) {
  let addObj = {
    number: newNumber,
    previousNumber: previousResult,
    operation: operationPerformed,
    result: newResult,
  };
  console.log(addObj);
}

function calcNow(calcType) {
  const userNum = getUserNum();
  const initialValue = currentResult;
  let mathOperator;
  if (calcType === "ADD") {
    currentResult = currentResult + userNum;
    mathOperator = "+";
  } else if (calcType === "SUB") {
    currentResult = currentResult - userNum;
    mathOperator = "-";
  } else if (calcType === "MUL") {
    currentResult = currentResult * userNum;
    mathOperator = "*";
  } else if (calcType === "DIV") {
    currentResult = currentResult / userNum;
    mathOperator = "/";
  }
  createOutput(mathOperator, initialValue, userNum);
  writeToLog(calcType, userNum, currentResult, initialValue);
}

function add() {
  // const userNum = getUserNum();
  // const initialValue = currentResult;
  // currentResult = currentResult + userNum;
  // createOutput("+", initialValue, userNum);
  // writeToLog("Add", userNum, currentResult, initialValue);
  calcNow("ADD");
}

function sub() {
  // const userNum = getUserNum();
  // const initialValue = currentResult;
  // currentResult = currentResult - userNum;
  // createOutput("-", initialValue, userNum);
  // writeToLog("Sub", userNum, currentResult, initialValue);
  calcNow("SUB");
}

function mul() {
  // const userNum = getUserNum();
  // const initialValue = currentResult;
  // currentResult = currentResult * userNum;
  // createOutput("*", initialValue, userNum);
  // writeToLog("Mul", userNum, currentResult, initialValue);
  calcNow("MUL");
}

function div() {
  // const userNum = getUserNum();
  // const initialValue = currentResult;
  // currentResult = currentResult / userNum;
  // createOutput("/", initialValue, userNum);
  // writeToLog("Div", userNum, currentResult, initialValue);
  calcNow("DIV");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", sub);
multiplyBtn.addEventListener("click", mul);
divideBtn.addEventListener("click", div);
