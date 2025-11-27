const display = document.getElementById("viewScreen");
function addDisplay(input) {
  display.value += input;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Input Error";
  }
}

function blankScreen() {
  display.value = "";
}
