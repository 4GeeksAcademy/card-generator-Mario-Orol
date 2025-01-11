/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const symbols = ["♦", "♥", "♠", "♣"];
  const numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  function generateRandomCard() {
    // Generate a random index for symbols
    let randomSymbolsIndex = Math.floor(Math.random() * symbols.length);

    // Generate a random index for numbers
    let randomNumberIndex = Math.floor(Math.random() * numbers.length);

    // Get the elements by ID
    let topSuit = document.getElementById("top-suit");
    let num = document.getElementById("num");
    let bottomSuit = document.getElementById("bottom-suit");

    // Set new random values
    let selectedSymbol = symbols[randomSymbolsIndex];
    topSuit.innerText = selectedSymbol;
    num.innerText = numbers[randomNumberIndex];
    bottomSuit.innerText = selectedSymbol;

    //Apply color based on Symbol
    if (selectedSymbol === "♥" || selectedSymbol === "♦") {
      topSuit.classList.add("red");
      bottomSuit.classList.add("red");
    } else {
      topSuit.classList.remove("red");
      bottomSuit.classList.remove("red");
    }
  }

  generateRandomCard();

  // new card button
  const buttonGenerate = document.getElementById("generateCard");
  buttonGenerate.addEventListener("click", generateRandomCard);

  // timmer button
  const timerDiv = document.getElementById("timer");
  const timerButton = document.getElementById("startTimer");

  timerButton.addEventListener("click", () => {
    let timeLeft = 10;

    timerDiv.innerText = `00:00:${timeLeft < 10 ? "0" + timeLeft : timeLeft}`;

    const countdown = setInterval(() => {
      timeLeft--;
      timerDiv.innerText = `00:00:${timeLeft < 10 ? "0" + timeLeft : timeLeft}`;

      if (timeLeft <= 0) {
        clearInterval(countdown);
        generateRandomCard();
        timerDiv.innerText = "Time's up!";
      }
    }, 1000);
  });

  // Width and Height
  const widthInput = document.getElementById("widthInput");
  const heightInput = document.getElementById("heightInput");
  const card = document.getElementById("card");

  //Event listener for width input
  widthInput.addEventListener("input", () => {
    const newWidth = widthInput.value;
    if (newWidth > 0) {
      card.style.width = `${newWidth}px`;
    }
  });

  //Event listener for height input
  heightInput.addEventListener("input", () => {
    const newHeight = heightInput.value;
    if (newHeight > 0) {
      card.style.height = `${newHeight}px`;
    }
  });
};
