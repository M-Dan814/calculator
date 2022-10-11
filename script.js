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
  let result = 0;
  for (let i = 0; i < Arr.length; i++) {
    switch (Arr[i]) {
      case "+":
        result = Arr[i - 1] + Arr[i + 1];
        Arr[i + 1] = result;
        break;
      case "-":
        result = Arr[i - 1] - Arr[i + 1];
        Arr[i + 1] = result;
        break;
      case "x":
        result = Arr[i - 1] * Arr[i + 1];
        Arr[i + 1] = result;
        break;
      case "/":
        if (Arr[i + 1] == 0) {
          display.textContent = "";
          display.textContent = "lmao";
          break;
        }
        result = Arr[i - 1] / Arr[i + 1];
        Arr[i + 1] = result
        break;
      default:
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
    Arr[i] = parseInt(Arr[i]);
  }
  return Arr;
}

eq.addEventListener("click", () => {
  let ops = display.textContent.split(" ");

  ops = parseArray(ops);

  operate(ops);
  console.log(ops);
});
