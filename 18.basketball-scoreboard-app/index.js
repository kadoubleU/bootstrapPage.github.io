//HOME FUNCTIONS

let btn1 = document.getElementById("add1h");
let btn2 = document.getElementById("add2h");
let btn3 = document.getElementById("add3h");

let homeScoreLine = document.getElementById("home-result");

let resultHome = 0;

//-------------------------------

let btn4 = document.getElementById("add4g");
let btn5 = document.getElementById("add5g");
let btn6 = document.getElementById("add6g");

let guestScoreLine = document.getElementById("guest-result");

let resultGuests = 0;

function add1h() {
  resultHome += 1;
  homeScoreLine.textContent = resultHome;
}

function add2h() {
  resultHome += 2;
  homeScoreLine.textContent = resultHome;
}

function add3h() {
  resultHome += 3;
  homeScoreLine.textContent = resultHome;
}

//GUEST FUNCTIONS

function add4g() {
  resultGuests += 1;
  guestScoreLine.textContent = resultGuests;
}

function add5g() {
  resultGuests += 2;
  guestScoreLine.textContent = resultGuests;
}

function add6g() {
  resultGuests += 3;
  guestScoreLine.textContent = resultGuests;
}

//RESET RESULT

let resetBtn = document.getElementById("reset");

function newGame() {
  homeScoreLine.textContent = 0;
  homeScoreLine.style.color = "#F94F6D";
  guestScoreLine.textContent = 0;
  guestScoreLine.style.color = "#F94F6D";

  resultHome = 0;
  resultGuests = 0;
}

//Winner

function winner() {
  if (resultHome > resultGuests) {
    homeScoreLine.style.color = "green";
    guestScoreLine.style.color = "#F94F6D";
  } else if (resultHome < resultGuests) {
    guestScoreLine.style.color = "green";
    homeScoreLine.style.color = "#F94F6D";
  } else {
    guestScoreLine.style.color = "#F94F6D";
    homeScoreLine.style.color = "#F94F6D";
  }
}
