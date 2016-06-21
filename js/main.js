
var calcState = {
  left: "",
  right: "",
  operator: ""
};

var processButton = function (event) {
  var target = event.target;
//  console.log(target.dataset);
  var dataType = target.dataset.type;

  if (dataType === "number") return processNumber(target);
  if (dataType === "operator") return processOperator(target);
  if (dataType === "clear") return processClear(target);
  if (dataType === "equal") return processEqual(target);
};

var updateDisplay = function () {
  var display = $("#display");
  return display.html(calcState.left + " " + calcState.operator + " " + calcState.right);
};

var processNumber = function (button) {
  if (calcState.operator === "") {
    calcState.left += button.textContent;
  } else {
    calcState.right += button.textContent;
  }
  return updateDisplay();
};

var processOperator = function (button) {
  calcState.operator = button.textContent;
  return updateDisplay();
};

var processClear = function (button) {
  calcState = { left: "", operator: "", right: "" };
  updateDisplay();
};

var processEqual = function (button) {
  var op = calcState.operator;
  var left = Number(calcState.left);
  var right = Number(calcState.right);
  if (op === "" || calcState.left === "" || calcState.right === "") {
    return alert("Error: You need a left term, right term, and operator.");
  }
  if (op === "+") {
    calcState = { left: left + right, operator: "", right: "" };
  } else if (op === "-") {
    calcState = { left: left - right, operator: "", right: "" };
  } else if (op === "*") {
    calcState = { left: left * right, operator: "", right: "" };
  } else if (op === "/") {
    calcState = { left: left / right, operator: "", right: "" };
  }
  return updateDisplay();
};

$(".buttons").on('click', processButton);
