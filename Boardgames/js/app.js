const addNewGameBtn = document.querySelector(".add-game-button");
const NewGameBox = document.querySelector(".add-game-box");
const backdrop = document.querySelector(".backdrop");
const cancelBtn = document.querySelector(".btn--cancel");
const acceptBtn = document.querySelector(".btn--ok");
const games = document.querySelectorAll(".game");
const gamesList = document.querySelector(".games-list");
const gameOptions = document.querySelectorAll(".game-options");
const deleteBtns = document.querySelectorAll(".btn--delete-game");
const NewGameTitleInput = NewGameBox.querySelector('input[name="title"]');
const NewGameUrlInput = NewGameBox.querySelector('input[name="image-url"]');
const NewGameRatingInputs = NewGameBox.querySelectorAll('input[name="rating"]');
const NewGameStatusInputs = NewGameBox.querySelectorAll('input[name="status"]');

// const gamesBase = [];
// const game = {
//   title: "title",
//   url: "imgs/image-solid.png",
//   rate: "rate",
//   status: "status",
// };

const showNewGameBox = () => {
  NewGameBox.classList.add("active");
  backdrop.classList.add("active");
};
const hideNewGameBox = () => {
  NewGameBox.classList.remove("active");
  backdrop.classList.remove("active");
  NewGameTitleInput.value = "";
  NewGameUrlInput.value = "";
  for (const ratingInput of NewGameRatingInputs) {
    ratingInput.checked = false;
  }
  for (const statusInput of NewGameStatusInputs) {
    statusInput.checked = false;
  }
};

const newGameInBaseHandler = () => {
  let title = "";
  let url = "imgs/image-solid.png";
  let rate = 0;
  let status = 0;

  title = NewGameTitleInput.value;
  if (NewGameUrlInput.value) {
    url = NewGameUrlInput.value;
  }
  NewGameRatingInputs.forEach(function (ratingInput) {
    if (ratingInput.checked) {
      rate = +ratingInput.value;
    }
  });
  NewGameStatusInputs.forEach(function (statusInput) {
    if (statusInput.checked) {
      status = +statusInput.value;
    }
  });
  if (!NewGameTitleInput.value || !rate || !status) {
    return;
  }
  console.log(newGame);

  const newLi = document.createElement("li");
  newLi.classList.add("games-list__game");
  gamesList.appendChild(newLi);
};

addNewGameBtn.addEventListener("click", showNewGameBox);
backdrop.addEventListener("click", hideNewGameBox);
cancelBtn.addEventListener("click", hideNewGameBox);
acceptBtn.addEventListener("click", newGameInBaseHandler);

games.forEach(function (game, i) {
  game.addEventListener("click", () => {
    for (let j = 0; j < games.length; j++) {
      games[j].classList.remove("active");
      gameOptions[j].classList.remove("active");
    }
    game.classList.add("active");
    gameOptions[i].classList.add("active");
  });
});

//test
deleteBtns.forEach(function (deleteBtn, i) {
  deleteBtn.addEventListener("click", () => {
    console.log(games[i]);
  });
});
