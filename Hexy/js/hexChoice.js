import { discard, addHexToDiscard, showCardsDiscard } from "./discard.js";
import { hexs } from "./randomHexsGenerator.js";
const hexsChoice = [];

const removeUnnecessaryClasses = (el) => {
  el.currentTarget.classList.remove("enable");
  el.currentTarget.classList.remove("empty");
};

const addCardHexChoice = (el) => {
  removeUnnecessaryClasses(el);
  el.currentTarget.innerHTML = `
  <div class="hex-inner__content">
  <span>${hexsChoice[0][2]}</span>
  <p>${hexsChoice[0][0]}</p>
  </div>
  `;
  el.currentTarget.style.backgroundColor = `${hexsChoice[0][1]}`;
  hexsChoice.splice(0, 1);
  const board = document.querySelector(".board");
  const boardEls = board.querySelectorAll(".hex-inner");
  boardEls.forEach(function (boardEl) {
    boardEl.removeEventListener("click", addCardHexChoice);
    boardEl.classList.remove("enable");
  });
  drawCardStage();
};

const showCardsHexChoice = () => {
  const choiceBoxEl = document.querySelector(".choice-box");
  const darkBoxEl = document.querySelector(".dark-box");
  choiceBoxEl.classList.add("active");
  darkBoxEl.classList.add("active");

  for (let x = 0; x < 2; x++) {
    const randomNum = Math.floor(Math.random() * hexs.length);
    hexsChoice.push(hexs[randomNum]);
    hexs.splice(randomNum, 1);
  }

  choiceBoxEl.innerHTML = `
  <div class="hex-outer">
  <div class="hex-inner enable">
  <div class="hex-inner__content">
    <span>${hexsChoice[0][2]}</span>
    <p>${hexsChoice[0][0]}</p>
  </div>
</div>
</div>
<p>OR</p>
<div class="hex-outer">
<div class="hex-inner enable">
  <div class="hex-inner__content">
  <span>${hexsChoice[1][2]}</span>
  <p>${hexsChoice[1][0]}</p>
  </div>
</div>
</div>
  `;
  const hexsChoiceBoxEl = choiceBoxEl.querySelectorAll(".hex-inner");
  for (let x = 0; x < 2; x++) {
    hexsChoiceBoxEl[x].style.backgroundColor = `${hexsChoice[x][1]}`;
  }
  getCardHexChoice();
};

export const drawCardStage = () => {
  const deckHexsEl = document.querySelector(".deck__hexs");
  const deckHexEl = deckHexsEl.querySelector(".hex-inner");

  if (hexs.length > 1) {
    deckHexEl.classList.add("enable");
    deckHexsEl.addEventListener("click", showCardsHexChoice);
  }
};

const hiddenCardsHexChoice = (el) => {
  const darkBoxEl = document.querySelector(".dark-box");
  const choiceBoxEl = document.querySelector(".choice-box");
  const deckEl = document.querySelector(".deck");
  const deckHexEl = deckEl.querySelector(".hex-inner");
  const deckHexsEl = deckEl.querySelector(".deck__hexs");
  darkBoxEl.classList.remove("active");
  choiceBoxEl.classList.remove("active");
  choiceBoxEl.innerHTML = ``;
  const selectedChoice = el.currentTarget.index == 1 ? 0 : 1;
  addHexToDiscard(hexsChoice[selectedChoice]);
  hexsChoice.splice(selectedChoice, 1);
  deckHexEl.classList.remove("enable");
  deckHexsEl.removeEventListener("click", showCardsHexChoice);
  putCardHexChoice();
};

const putCardHexChoice = () => {
  const board = document.querySelector(".board");
  const boardEls = board.querySelectorAll(".empty");
  const discardHexsEl = document.querySelector(".deck__discard");
  const discardHexEl = discardHexsEl.querySelector(".hex-inner");
  if (discard.length > 0) {
    discardHexEl.classList.add("enable");
    discardHexsEl.addEventListener("click", showCardsDiscard);
  }
  boardEls.forEach(function (boardEl) {
    boardEl.classList.add("enable");
    boardEl.addEventListener("click", addCardHexChoice);
  });
};

const getCardHexChoice = () => {
  const choiceBoxEl = document.querySelector(".choice-box");
  const cardsEl = choiceBoxEl.querySelectorAll(".hex-outer");
  cardsEl.forEach(function (card, index) {
    card.index = index;
    card.addEventListener("click", hiddenCardsHexChoice);
  });
};
