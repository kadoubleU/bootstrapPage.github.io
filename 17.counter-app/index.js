let startNumber = document.getElementById("start-count");
let count = 0;

function incrementNumber() {
  count += 1;
  startNumber.textContent = count;
}

let saveResult = document.getElementById("prev-tourists-num");
let saveResultText = "Previous Tourists Numbers: ";

function saveNum() {
  saveResult.textContent += count + " - ";
  count = 0;
  startNumber.textContent = count;
}
