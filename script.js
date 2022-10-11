const digits = document.querySelectorAll(".ops"); // All numbers
const operators = document.querySelectorAll(".op"); // operators
const display = document.querySelector(".display"); // Calculator's display
const eq = document.querySelector("#equ"); // Equals to button
const clear = document.querySelector("#clear"); // AC/clear screen button
const del = document.querySelector("#del"); // Backspace button
let result = 0; // Global result variable
digits.forEach((digit) => // Adding event listeners to all digits
  digit.addEventListener("click", (e) => {
    if (display.textContent == "0") { // So that if there are no numbers already entered, 0 will be wiped and the digit will be entered
      display.textContent = "";
      display.textContent += e.target.value;
    }
    else if(result != 0){ // To check if the result has already been calculated
      display.textContent = e.target.value
      result = 0; // Re-initialize result variable to 0
    }
    else{
    display.textContent += e.target.value;
    }
  })
);

operators.forEach((operator) => // Adding event listeners to operators
  operator.addEventListener("click", (e) => {
    display.textContent += e.target.value;
    result = 0; // Re-initialize result variable so that it is possible to perform more calculations on a previous result
  })
);

clear.addEventListener("click", () => {
  display.textContent = "0"; // Clearing the screen
});

del.addEventListener("click", () => {
  if(display.textContent.charAt(display.textContent.length - 1) == " "){
    display.textContent = display.textContent.slice(0, -3) // If there is an operator at the end of the display, then remove the entire operator including whitespaces
  }
  else{
  display.textContent = display.textContent.slice(0, -1) // If there is only a number at the end, only remove one number
  }
  if(display.textContent == ""){
    display.textContent = "0"; // If all values are removed, automatically set display to 0
  }
})

function operate(Arr) { // Function to perform calculations
  for (let i = 0; i < Arr.length; i++) {
    switch (Arr[i]) {
      case "+":
        result = Arr[i - 1] + Arr[i + 1]; // Changing the result variable 
        Arr[i + 1] = Number(result.toFixed(2));  // toFixed() is used to round upto 2 decimal points
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
          result = "lmao"; // Generic message if user tries to divide by 0
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
  display.textContent = ""; // Set display to empty
  display.textContent += result; // Show the result
}

// Function for parsing all the numbers in display from string to float 
function parseArray(Arr) { 
  for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] == "x" || Arr[i] == "+" || Arr[i] == "-" || Arr[i] == "/") {
      continue;
    }
    Arr[i] = parseFloat(Arr[i]);
  }
  return Arr;
}


// Equals to event listener
eq.addEventListener("click", () => {
  let ops = display.textContent.split(" "); // Split all the values into an array
  ops = parseArray(ops); // Parse the numbers to float for calculations
  operate(ops); // Operate on the numbers
});
