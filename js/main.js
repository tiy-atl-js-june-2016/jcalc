
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

$(".buttons").on('click', processButton);
