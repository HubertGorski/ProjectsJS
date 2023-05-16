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

let gamesBase = games;
let optionsBase = gameOptions;
let deleteBtnsBase = deleteBtns;

const viewOptions = () => {
  gamesBase.forEach(function (game, i) {
    game.addEventListener("click", () => {
      for (let j = 0; j < gamesBase.length; j++) {
        gamesBase[j].classList.remove("active");
        optionsBase[j].classList.remove("active");
      }
      game.classList.add("active");
      optionsBase[i].classList.add("active");
    });
  });
};
const deleteBtnHandler = () => {
  deleteBtnsBase.forEach(function (deleteBtn, i) {
    deleteBtn.addEventListener("click", () => {
      gamesList.removeChild(gamesList.firstChild);
      console.log(gamesBase[i]);
      console.log(gamesList);
    });
  });
};
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
  // const newGame = {
  //   title: title,
  //   url: url,
  //   rate: rate,
  //   status: status,
  // };
  hideNewGameBox();

  const newLi = document.createElement("li");
  newLi.classList.add("games-list__game");
  const newDiv = document.createElement("div");
  const newDiv2 = document.createElement("div");
  newDiv.classList.add("game");
  newDiv2.classList.add("game-options");
  newDiv.innerHTML = `
  <img class="game-img" src="imgs/azul.png" alt="empty img" />
  <div class="game__content">
    <span class="game__content-el content-el--title">Azul</span>
    <span class="game__content-el content-el--ratio">
    </span>
    <ul class="game__content-el content-el--status">
      <li>OK</li>
      <li class="active">NOT YET</li>
      <li>NO</li>
    </ul>
  </div>`;
  newDiv2.innerHTML = `            <button class="btn btn--edit-game">Edit</button>
  <button class="btn btn--delete-game">Delete</button>`;
  gamesList.appendChild(newLi);
  newLi.appendChild(newDiv);
  newLi.appendChild(newDiv2);
  gamesBase = document.querySelectorAll(".game");
  optionsBase = document.querySelectorAll(".game-options");
  deleteBtnsBase = document.querySelectorAll(".btn--delete-game");
  viewOptions();
  deleteBtnHandler();
};
viewOptions();
deleteBtnHandler();
addNewGameBtn.addEventListener("click", showNewGameBox);
backdrop.addEventListener("click", hideNewGameBox);
cancelBtn.addEventListener("click", hideNewGameBox);
acceptBtn.addEventListener("click", newGameInBaseHandler);
