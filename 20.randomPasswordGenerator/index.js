const characters = [
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

let fieldOne = document.getElementById("field-one");
let fieldTwo = document.getElementById("field-two");

function generateRandomPassword() {
  let randomPassword = "";
  let randomPassword2 = "";

  for (let i = 0; i <= 15; i++) {
    let randomNum = Math.floor(Math.random() * characters.length);
    let randomChar = characters[randomNum];
    randomPassword += randomChar;
  }

  fieldOne.textContent = randomPassword;

  for (let i = 0; i <= 15; i++) {
    let randomNum = Math.floor(Math.random() * characters.length);
    let randomChar = characters[randomNum];
    randomPassword2 += randomChar;
  }

  fieldTwo.textContent = randomPassword2;
}
