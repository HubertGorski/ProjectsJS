const gameEl = {
  Board: ".board",
  Hand: ".hand",
};
const colors = {
  0: "blue",
  1: "red",
  2: "yellow",
  3: "black",
  4: "green",
};

const dragDropHandler = () => {
  const squaresBoard = document.querySelectorAll(".board__square");
  const squaresHand = document.querySelectorAll(".hand__square");
  let squareActive = null;

  squaresBoard.forEach((square) => {
    square.addEventListener("dragover", (e) => {
      if (squareActive != null) {
        e.preventDefault();
        square.classList.add("hovered");
      }
    });
    square.addEventListener("dragleave", (e) => {
      square.classList.remove("hovered");
    });
    square.addEventListener("mouseleave", (e) => {
      square.classList.remove("hovered");
    });
    square.addEventListener("drop", (e) => {
      squareActive.remove();
      square.classList.remove("hovered");
      square.style.setProperty(
        "background-color",
        squareActive.style.backgroundColor
      );
    });
  });

  squaresHand.forEach((square) => {
    square.addEventListener("dragstart", function (e) {
      squareActive = e.target;
      setTimeout(function () {
        square.style.display = "none";
      }, 0);
    });
    square.addEventListener("dragend", function (e) {
      setTimeout(function () {
        square.style.display = "block";
        squareActive = null;
      }, 0);
    });
  });
};

const render = (el, size) => {
  const elEl = document.querySelector(el);
  for (let square = 1; square <= size; square++) {
    const squareEl = document.createElement("div");
    squareEl.classList.add(el.replace(".", "") + "__square");
    squareEl.classList.add("flex-center");
    elEl.append(squareEl);

    if (elEl === document.querySelector(gameEl.Hand)) {
      const color = Math.round(Math.random() * 4);
      squareEl.style.backgroundColor = colors[color];
      squareEl.draggable = true;
    }
  }
};

const appInit = () => {
  render(gameEl.Board, 100);
  render(gameEl.Hand, 6);
  dragDropHandler();
};

appInit();
