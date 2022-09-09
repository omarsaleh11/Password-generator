console.clear();
localStorage.clear();
// variables ( DOM )

const passwordLengthEl = document.getElementById("password-length");
const rangeEl = document.getElementById("Range");
const firstPasswordEl = document.getElementById("first-password");
const secondPasswordEl = document.getElementById("second-password");
const upperEl = document.getElementById("upper-characters");
const lowerEl = document.getElementById("lower-characters");
const numbersEl = document.getElementById("numbers-characters");
const symbolsEl = document.getElementById("symbols-characters");
const generateEl = document.getElementById("generate-passwords");
const clipboardOneEl = document.getElementById("Copy-1");
const clipboardTwoEl = document.getElementById("Copy-2");

// length range value

passwordLengthEl.textContent += " " + rangeEl.value;
rangeEl.oninput = function () {
 passwordLengthEl.textContent = +this.value;
};

//  generate

generateEl.addEventListener("click", function () {
 const length = rangeEl.value;
 const hasUpper = upperEl.checked;
 const hasLower = lowerEl.checked;
 const hasNumbers = numbersEl.checked;
 const hasSymbols = symbolsEl.checked;
 firstPasswordEl.innerText = generatePassword(hasUpper, hasLower, hasNumbers, hasSymbols, length);
 secondPasswordEl.innerText = generatePassword(hasUpper, hasLower, hasNumbers, hasSymbols, length);
});

function generatePassword(upper, lower, number, symbol, length) {
 let generatedPassword = "";
 const boxesCount = upper + lower + number + symbol;
 const boxesArr = [{ upper }, { lower }, { number }, { symbol }].filter(item => Object.values(item)[0]);
 if (boxesCount === 0) {
  return "";
 }
 for (let i = 0; i < length; i += boxesCount) {
  boxesArr.forEach(type => {
   const funcName = Object.keys(type)[0];
   generatedPassword += randomFunc[funcName]();
  });
 }
 const finalPassword = generatedPassword.slice(0, length);
 return finalPassword;
}

// random functions

const randomFunc = {
 upper: getRandomUpper,
 lower: getRandomLower,
 number: getRandomNumber,
 symbol: getRandomSymbol,
};
function getRandomUpper() {
 const upperCH = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 return upperCH[Math.floor(Math.random() * upperCH.length)];
}
function getRandomLower() {
 const lowerCH = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 return lowerCH[Math.floor(Math.random() * lowerCH.length)];
}
function getRandomNumber() {
 const numbersCH = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

 return numbersCH[Math.floor(Math.random() * numbersCH.length)];
}
function getRandomSymbol() {
 const symbolsCH = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

 return symbolsCH[Math.floor(Math.random() * symbolsCH.length)];
}
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
 alert(`This password : ${passwordOne} copied`);
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
 alert(`This password : ${passwordTwo} copied`);
});
