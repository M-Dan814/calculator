const buttons = document.querySelectorAll(".ops");
const display = document.querySelector(".display");
const eq = document.querySelector("#equ");
const clear = document.querySelector("#clear");

buttons.forEach((digit) =>
  digit.addEventListener("click", (e) => {
    if (display.textContent == "0") {
      display.textContent = "";
    }
    display.textContent += e.target.value;
  })
);

clear.addEventListener("click", () => {
  display.textContent = "0";
});

function operate(Arr) {
  let operator = "";
  let firstOperand = 0;
  let secondOperand = 0;
  let result = 0;
  for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] == "x" || Arr[i] == "+" || Arr[i] == "-" || Arr[i] == "/") {
      operator = Arr[i];
      firstOperand = Arr[i - 1];
      secondOperand = Arr[i + 1];
    } else {
      continue;
    }
    switch (operator) {
      case "+":
        let addResult = firstOperand + secondOperand;
        result += addResult;
        break;
      case "-":
        let subResult = firstOperand - secondOperand;
        result += subResult;
        break;
      case "x":
        let product = firstOperand * secondOperand;
        result += product;
        break;
      case "/":
        if (secondOperand == 0) {
          display.textContent = "";
          display.textContent += "lmao";
          break;
        }
        let divResult = firstOperand / secondOperand;
        result += divResult;
        break;
    }
  }
  display.textContent = "";
  display.textContent += result;
}

eq.addEventListener("click", () => {
  const ops = display.textContent.split(" ");

  for (let i = 0; i < ops.length; i++) {
    if (ops[i] == "x" || ops[i] == "+" || ops[i] == "-" || ops[i] == "/") {
      continue;
    }
    ops[i] = parseInt(ops[i]);
  }
  operate(ops);
  console.log(ops);
});
