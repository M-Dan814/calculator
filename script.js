const add = document.querySelector("#add");
const sub = document.querySelector("#sub");
const mul = document.querySelector("#mul");
const div = document.querySelector("#div");
const display = document.querySelector(".display");
const digits = document.querySelectorAll(".nums");
const eq = document.querySelector("#equ");

digits.forEach(digit => digit.addEventListener("click", (e) => {
    display.textContent += e.target.value;
}))

add.addEventListener("click", () => {
    display.textContent += " + ";
})

sub.addEventListener("click", () => {
    display.textContent += " - ";
})

mul.addEventListener("click", () => {
    display.textContent += " x ";
})

div.addEventListener("click", () => {
    display.textContent += ` \u00f7 `;
})

