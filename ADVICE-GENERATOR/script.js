const dice = document.querySelector("#dice");
const number = document.querySelector("#number");
const adviceText = document.querySelector("#advice");
const advice = "https://api.adviceslip.com/advice";

window.onload = showAdvice;

dice.addEventListener("click", showAdvice);

function showAdvice() {
  fetch(advice)
    .then((response) => response.json())
    .then((data) => data.slip)
    .then((data) => {
      number.textContent = data.id;
      adviceText.textContent = data.advice;
    })
    .catch((error) => {
      alert(`Error ${error}`);
  });
}