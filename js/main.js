// const allCharacters = [
//     "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/",
// ];
// const noSymbolsCharacters = [
//     "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ];
const allCharacters = [
 "A",
 "B",
 "C",
 "D",
 "E",
 "F",
 "G",
 "H",
 "I",
 "J",
 "K",
 "L",
 "M",
 "N",
 "O",
 "P",
 "Q",
 "R",
 "S",
 "T",
 "U",
 "V",
 "W",
 "X",
 "Y",
 "Z",
 "a",
 "b",
 "c",
 "d",
 "e",
 "f",
 "g",
 "h",
 "i",
 "j",
 "k",
 "l",
 "m",
 "n",
 "o",
 "p",
 "q",
 "r",
 "s",
 "t",
 "u",
 "v",
 "w",
 "x",
 "y",
 "z",
 "0",
 "1",
 "2",
 "3",
 "4",
 "5",
 "6",
 "7",
 "8",
 "9",
 "~",
 "`",
 "!",
 "@",
 "#",
 "$",
 "%",
 "^",
 "&",
 "*",
 "(",
 ")",
 "_",
 "-",
 "+",
 "=",
 "{",
 "[",
 "}",
 "]",
 ",",
 "|",
 ":",
 ";",
 "<",
 ">",
 ".",
 "?",
 "/",
];
const noNumbersCharacters = [
 "A",
 "B",
 "C",
 "D",
 "E",
 "F",
 "G",
 "H",
 "I",
 "J",
 "K",
 "L",
 "M",
 "N",
 "O",
 "P",
 "Q",
 "R",
 "S",
 "T",
 "U",
 "V",
 "W",
 "X",
 "Y",
 "Z",
 "a",
 "b",
 "c",
 "d",
 "e",
 "f",
 "g",
 "h",
 "i",
 "j",
 "k",
 "l",
 "m",
 "n",
 "o",
 "p",
 "q",
 "r",
 "s",
 "t",
 "u",
 "v",
 "w",
 "x",
 "y",
 "z",
 "~",
 "`",
 "!",
 "@",
 "#",
 "$",
 "%",
 "^",
 "&",
 "*",
 "(",
 ")",
 "_",
 "-",
 "+",
 "=",
 "{",
 "[",
 "}",
 "]",
 ",",
 "|",
 ":",
 ";",
 "<",
 ">",
 ".",
 "?",
 "/",
];
const noSymbolsCharacters = [
 "A",
 "B",
 "C",
 "D",
 "E",
 "F",
 "G",
 "H",
 "I",
 "J",
 "K",
 "L",
 "M",
 "N",
 "O",
 "P",
 "Q",
 "R",
 "S",
 "T",
 "U",
 "V",
 "W",
 "X",
 "Y",
 "Z",
 "a",
 "b",
 "c",
 "d",
 "e",
 "f",
 "g",
 "h",
 "i",
 "j",
 "k",
 "l",
 "m",
 "n",
 "o",
 "p",
 "q",
 "r",
 "s",
 "t",
 "u",
 "v",
 "w",
 "x",
 "y",
 "z",
 "0",
 "1",
 "2",
 "3",
 "4",
 "5",
 "6",
 "7",
 "8",
 "9",
];
const noNumbersnoSymbolsCharacters = [
 "A",
 "B",
 "C",
 "D",
 "E",
 "F",
 "G",
 "H",
 "I",
 "J",
 "K",
 "L",
 "M",
 "N",
 "O",
 "P",
 "Q",
 "R",
 "S",
 "T",
 "U",
 "V",
 "W",
 "X",
 "Y",
 "Z",
 "a",
 "b",
 "c",
 "d",
 "e",
 "f",
 "g",
 "h",
 "i",
 "j",
 "k",
 "l",
 "m",
 "n",
 "o",
 "p",
 "q",
 "r",
 "s",
 "t",
 "u",
 "v",
 "w",
 "x",
 "y",
 "z",
];
let passwordLength = 15;
let passwordLengthEL = document.querySelector("#password-lenth");
let range = document.querySelector("#Range");
let generated = false;
let numbers = true;
let symbols = true;
let numbersCharacters = document.querySelector("#numbers-chrctrs");
let symbolsCharacters = document.querySelector("#symbols-chrctrs");
function Numbers() {
 if (numbersCharacters.checked == false) {
  numbers = false;
 } else {
  numbers = true;
 }
}
function Symbols() {
 if (symbolsCharacters.checked == false) {
  symbols = false;
 } else {
  symbols = true;
 }
}
const firstPassword = document.querySelector("#first-password");
const secondPassword = document.querySelector("#second-password");
passwordLengthEL.textContent += " " + range.value;
range.oninput = function () {
 passwordLengthEL.textContent = +this.value;
 passwordLength = this.value;
};
// generator

function random() {
 let password = "";
 if (numbers === true && symbols === true) {
  for (let i = 0; i < passwordLength; i++) {
   password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  return password;
 } else if (numbers === false && symbols === true) {
  for (let i = 0; i < passwordLength; i++) {
   password += noNumbersCharacters[Math.floor(Math.random() * noNumbersCharacters.length)];
  }
  return password;
 } else if (numbers === true && symbols === false) {
  for (let i = 0; i < passwordLength; i++) {
   password += noSymbolsCharacters[Math.floor(Math.random() * noSymbolsCharacters.length)];
  }
  return password;
 } else if (numbers === false && symbols === false) {
  for (let i = 0; i < passwordLength; i++) {
   password += noNumbersnoSymbolsCharacters[Math.floor(Math.random() * noNumbersnoSymbolsCharacters.length)];
  }
  return password;
 }
}
function generate() {
 firstPassword.textContent = random();
 secondPassword.textContent = random();
 document.querySelector(".copy1").textContent = "Copy";
 document.querySelector(".copy2").textContent = "Copy";
 generated = true;
}
function copy1() {
 if (generated === true) {
  navigator.clipboard.writeText(firstPassword.textContent);
  document.querySelector(".copy1").textContent = "copied";
 }
}
function copy2() {
 if (generated === true) {
  navigator.clipboard.writeText(secondPassword.textContent);
  document.querySelector(".copy2").textContent = "copied";
 }
}
