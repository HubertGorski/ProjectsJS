export const discard = [];
const discardBox = document.querySelector(".discard-box");
const darkBoxEl = document.querySelector(".dark-box");

const makeDiscardList = (hex) => {
  const discardEls = document.querySelector(".deck__discard");
  const discardEl = discardEls.querySelector(".hex-inner");
  discard.push(hex);
  if (discard.length > 0) {
    discardEl.innerHTML = `
  <div class="hex-inner__content">
  <span>${hex[2]}</span>
  <p>${hex[0]}</p>
  </div>
  `;
    discardEl.style.backgroundColor = `${hex[1]}`;
  }
};
const makeDiscardCover = (hex) => {
  if (discard.length > 0) {
    const el = document.createElement("div");
    const div = document.createElement("div");
    el.classList.add("hex-outer");
    div.classList.add("hex-inner");
    div.innerHTML = `
<div class="hex-inner__content">
<span>${hex[2]}</span>
<p>${hex[0]}</p>
</div>
`;
    el.append(div);
    discardBox.append(el);
    div.style.backgroundColor = `${hex[1]}`;
  }
};

export const addHexToDiscard = (hex) => {
  makeDiscardList(hex);
  makeDiscardCover(hex);
};
export const showCardsDiscard = () => {
  discardBox.classList.add("active");
  darkBoxEl.classList.add("active");
  exitCardsDiscard();
};

const exitCardsDiscard = () => {
  const exitDiscardBox = document.querySelector(".discard-box__exit");
  exitDiscardBox.addEventListener("click", () => {
    discardBox.classList.remove("active");
    darkBoxEl.classList.remove("active");
  });
};
