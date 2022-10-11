const buttons = document.querySelectorAll(".ops");
const operators = document.querySelectorAll(".op");
const display = document.querySelector(".display");
const eq = document.querySelector("#equ");
const clear = document.querySelector("#clear");
const del = document.querySelector("#del");

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    if (display.textContent == "0") {
      display.textContent = "";
    }
    display.textContent += e.target.value;
  })
);

operators.forEach((operator) =>
  operator.addEventListener("click", (e) => {
    display.textContent += e.target.value;
  })
);

clear.addEventListener("click", () => {
  display.textContent = "0";
});

del.addEventListener("click", () => {
  display.textContent = display.textContent.slice(0, -1)
  if(display.textContent == ""){
    display.textContent = "0";
  }
})

function operate(Arr) {
  let result = 0;
  for (let i = 0; i < Arr.length; i++) {
    switch (Arr[i]) {
      case "+":
        result = Arr[i - 1] + Arr[i + 1];
        Arr[i + 1] = Number(result.toFixed(2));
        break;
      case "-":
        result = Arr[i - 1] - Arr[i + 1];
        Arr[i + 1] = Number(result.toFixed(2));
        break;
      case "x":
        result = Arr[i - 1] * Arr[i + 1];
        Arr[i + 1] = Number(result.toFixed(2));
        break;
      case "/":
        if (Arr[i + 1] === 0) {
          result = "lmao";
          break;
        }
        result = Arr[i - 1] / Arr[i + 1];
        Arr[i + 1] = Number(result.toFixed(2));
        break;
      default:
        result = Arr[i];
        break;
    }
  }
  display.textContent = "";
  display.textContent += result;
}

function parseArray(Arr) {
  for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] == "x" || Arr[i] == "+" || Arr[i] == "-" || Arr[i] == "/") {
      continue;
    }
    Arr[i] = parseFloat(Arr[i]);
  }
  return Arr;
}

eq.addEventListener("click", () => {
  let ops = display.textContent.split(" ");
  ops = parseArray(ops);
  operate(ops);
});
