const inputField = document.querySelector("#input-number");
const convertBtn = document.querySelector("#convert-btn");
const clearBtn = document.querySelector("#clear-btn");

//Paragraphs Information
const metersFeetP = document.querySelector("#meters-feet");
const litersGallonsP = document.querySelector("#liters-gallons");
const kgPoundsP = document.querySelector("#kg-pounds");

convertBtn.addEventListener("click", function () {
  let inputValue = Number(inputField.value);

  //Meters-Feet Calculator
  let metersFeet = `${inputValue} meters = ${(inputValue * 3.2808).toFixed(
    3
  )} feet | ${inputValue} feet = ${(inputValue / 3.281).toFixed(3)} meters`;
  metersFeetP.textContent += metersFeet;

  //Liters-Gallons Calculator
  let litersGalloons = `${inputValue} liters = ${(
    inputValue * 0.264172052
  ).toFixed(3)} gallons | ${inputValue} gallons = ${(
    inputValue / 0.264172052
  ).toFixed(3)} liters`;

  litersGallonsP.textContent += litersGalloons;

  //Kilograms-Pounds Calculator
  let kgPounds = `${inputValue} kilos = ${(inputValue * 2.20462262).toFixed(
    3
  )} pounds | ${inputValue} pounds = ${(inputValue / 2.20462262).toFixed(
    3
  )} kilos`;

  kgPoundsP.textContent += kgPounds;
});

clearBtn.addEventListener("click", function () {
  location.reload();
});
