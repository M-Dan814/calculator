const add = document.querySelector("#add");
const sub = document.querySelector("#sub");
const mul = document.querySelector("#mul");
const div = document.querySelector("#div");
const display = document.querySelector(".display");
const digits = document.querySelectorAll(".nums");
const eq = document.querySelector("#equ");

digits.forEach((digit) =>
  digit.addEventListener("click", (e) => {
    if(display.textContent == "0"){
        display.textContent = "";
    }
    display.textContent += e.target.value;
  })
);

add.addEventListener("click", () => {
  display.textContent += " + ";
});

sub.addEventListener("click", () => {
  display.textContent += " - ";
});

mul.addEventListener("click", () => {
  display.textContent += " x ";
});

div.addEventListener("click", () => {
  display.textContent += ` \u00f7 `;
});

function operate(Arr) {
  let operator = "";
  let firstOperand = 0;
  let secondOperand = 0;
  let result = 0;
  for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] == "x" || Arr[i] == "+" || Arr[i] == "-" || Arr[i] == "\u00f7") {
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
      case "\u00f7":
        if(secondOperand == 0){
            display.textContent = "";
            display.textContent += "Oops! Can't divide by 0!"
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
    if (ops[i] == "x" || ops[i] == "+" || ops[i] == "-" || ops[i] == "\u00f7") {
      continue;
    }
    ops[i] = parseInt(ops[i]);
  }
  operate(ops);
  console.log(ops);
});
