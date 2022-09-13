//  Characters
let characters = [];
const symbolsCH = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
const lowerCH = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCH = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbersCH = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const allCharacters = [...symbolsCH, ...lowerCH, ...upperCH, ...numbersCH];
// Symbols
const symbols_lower = [...symbolsCH, ...lowerCH];
const symbols_upper = [...symbolsCH, ...upperCH];
const symbols_numbers = [...symbolsCH, ...numbersCH];
const symbols_lower_upper = [...symbolsCH, ...lowerCH, ...upperCH];
const symbols_lower_numbers = [...symbolsCH, ...lowerCH, ...numbersCH];
const symbols_upper_numbers = [...symbolsCH, ...upperCH, ...numbersCH];

// LowerCase
const lower_upper = [...lowerCH, ...upperCH];
const lower_numbers = [...lowerCH, ...numbersCH];
const lower_upper_numbers = [...lowerCH, ...upperCH, ...numbersCH];

// UpperCase
const upper_numbers = [...upperCH, ...numbersCH];

// variables ( DOM )

const passwordLengthEl = document.getElementById("password-length");
const rangeEl = document.getElementById("Range");
let length = rangeEl.value;
const firstPasswordEl = document.getElementById("first-password");
const secondPasswordEl = document.getElementById("second-password");
let upperEl = document.getElementById("upper-characters"),
 upper = true;
let lowerEl = document.getElementById("lower-characters"),
 lower = true;
let numbersEl = document.getElementById("numbers-characters"),
 number = true;
let symbolsEl = document.getElementById("symbols-characters"),
 symbol = true;
const generateEl = document.getElementById("generate-passwords");
const clipboardOneEl = document.getElementById("Copy-1");
const firstCopy = document.getElementById("first-copy");
const clipboardTwoEl = document.getElementById("Copy-2");
const secondCopy = document.getElementById("second-copy");
const hasUpper = upperEl.checked;
const hasLower = lowerEl.checked;
const hasNumbers = numbersEl.checked;
const hasSymbols = symbolsEl.checked;

// Dark Mode Toggle
let darkModeStorge = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const enableDarkMode = () => {
 document.body.classList.add("dark-mode");
 localStorage.setItem("darkMode", "enabled");
};
const desableDarkMode = () => {
 document.body.classList.remove("dark-mode");
 localStorage.setItem("darkMode", null);
};
if (darkModeStorge === "enabled") {
 enableDarkMode();
}
darkModeToggle.addEventListener("click", () => {
 darkModeStorge = localStorage.getItem("darkMode");
 if (darkModeStorge !== "enabled") {
  enableDarkMode();
 } else {
  desableDarkMode();
 }
});

// Check Boxes
upperEl.onchange = event => {
 if (upperEl.checked) {
  upper = true;
 } else {
  upper = false;
 }
};
lowerEl.onchange = event => {
 if (lowerEl.checked) {
  lower = true;
 } else {
  lower = false;
 }
};
numbersEl.onchange = event => {
 if (numbersEl.checked) {
  number = true;
 } else {
  number = false;
 }
};
symbolsEl.onchange = event => {
 if (symbolsEl.checked) {
  symbol = true;
 } else {
  symbol = false;
 }
};

// Length of the Password
passwordLengthEl.textContent += " " + rangeEl.value;
rangeEl.oninput = function () {
 passwordLengthEl.textContent = +this.value;
 length = this.value;
};
// generate

function generatePassword() {
 let generatedPassword = "";
 const boxesCount = lower + upper + number + symbol;
 if (boxesCount === 0) {
  return "";
 }
 if (upper === true && boxesCount === 1) {
  characters = upperCH;
 } else if (lower === true && boxesCount === 1) {
  characters = lowerCH;
 } else if (number === true && boxesCount === 1) {
  characters = numbersCH;
 } else if (symbol === true && boxesCount === 1) {
  characters = symbolsCH;
 } else if (upper === true && lower === true && boxesCount === 2) {
  characters = lower_upper;
 } else if (upper === true && number === true && boxesCount === 2) {
  characters = upper_numbers;
 } else if (upper === true && symbol === true && boxesCount === 2) {
  characters = symbols_upper;
 } else if (lower === true && number === true && boxesCount === 2) {
  characters = lower_numbers;
 } else if (lower === true && symbol === true && boxesCount === 2) {
  characters = symbols_lower;
 } else if (number === true && symbol === true && boxesCount === 2) {
  characters = symbols_numbers;
 } else if (symbol === true && lower === true && upper === true && boxesCount === 3) {
  characters = symbols_lower_upper;
 } else if (symbol === true && lower === true && number === true && boxesCount === 3) {
  characters = symbols_lower_numbers;
 } else if (symbol === true && upper === true && number === true && boxesCount === 3) {
  characters = symbols_upper_numbers;
 } else if (number === true && lower === true && upper === true && boxesCount === 3) {
  characters = lower_upper_numbers;
 } else if (boxesCount == 4) {
  characters = allCharacters;
 }
 for (let i = 0; i < length; i++) {
  generatedPassword += characters[Math.floor(Math.random() * characters.length)];
 }
 return generatedPassword;
}
generateEl.addEventListener("click", () => {
 firstPasswordEl.innerText = generatePassword();
 firstCopy.textContent = "Copy";
 secondPasswordEl.innerText = generatePassword();
 secondCopy.textContent = "Copy";
});

// clipboard
clipboardOneEl.addEventListener("click", () => {
 const textareaOne = document.createElement("textarea");
 const passwordOne = firstPasswordEl.innerText;
 if (!passwordOne) {
  return;
 }
 textareaOne.value = passwordOne;
 document.body.appendChild(textareaOne);
 textareaOne.select();
 document.execCommand("copy");
 textareaOne.remove();
 firstCopy.textContent = "Copied";
 secondCopy.textContent = "Copy";
});
clipboardTwoEl.addEventListener("click", () => {
 const textareaTwo = document.createElement("textarea");
 const passwordTwo = secondPasswordEl.innerText;
 if (!passwordTwo) {
  return;
 }
 textareaTwo.value = passwordTwo;
 document.body.appendChild(textareaTwo);
 textareaTwo.select();
 document.execCommand("copy");
 textareaTwo.remove();
 secondCopy.textContent = "Copied";
 firstCopy.textContent = "Copy";
});
