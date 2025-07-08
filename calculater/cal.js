// JavaScript logic for calculator

const display = document.getElementById("display");
let currentValue = "0";
let formula = "";
let evaluated = false;

function updateDisplay() {
  display.value = currentValue;
}

function clearDisplay() {
  currentValue = "0";
  formula = "";
  evaluated = false;
  updateDisplay();
}

function appendToDisplay(val) {
  if (evaluated) {
    currentValue = /[0-9.]/.test(val) ? val : currentValue;
    formula = /[0-9.]/.test(val) ? val : currentValue;
    evaluated = false;
  } else {
    if (currentValue === "0" && val === "0") return;
    if (currentValue === "0" && val !== ".") currentValue = "";

    if (val === ".") {
      const parts = currentValue.split(/[-+*/]/);
      const lastNumber = parts[parts.length - 1];
      if (lastNumber.includes(".")) return;
    }

    currentValue += val;
    formula += val;
  }
  updateDisplay();
}

function handleOperator(op) {
  if (evaluated) {
    formula = currentValue;
    evaluated = false;
  }

  // Fix consecutive operators
  if (/[-+*/]$/.test(formula)) {
    if (op === "-" && !/[-+*/]-$/.test(formula)) {
      formula += op;
      currentValue += op;
    } else {
      // Replace ALL consecutive operators at end with new one, allowing only one - at the end if valid
      formula = formula.replace(/[-+*/]+$/, op);
      currentValue = currentValue.replace(/[-+*/]+$/, op);
    }
  } else {
    formula += op;
    currentValue += op;
  }

  updateDisplay();
}

function calculateResult() {
  try {
    let result = eval(formula);
    result = parseFloat(result.toFixed(10));
    currentValue = result.toString();
    formula = currentValue;
    evaluated = true;
    updateDisplay();
  } catch {
    currentValue = "Error";
    updateDisplay();
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
  const id = btn.id;
  btn.addEventListener("click", () => {
    if (id === "clear") clearDisplay();
    else if (id === "equals") calculateResult();
    else if (["add", "subtract", "multiply", "divide"].includes(id)) {
      const ops = { add: "+", subtract: "-", multiply: "*", divide: "/" };
      handleOperator(ops[id]);
    } else if (id === "decimal") appendToDisplay(".");
    else appendToDisplay(btn.textContent);
  });
});

