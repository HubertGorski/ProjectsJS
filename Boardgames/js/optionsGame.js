//const editGame = (gameEl) => {};

const removeGame = (gameEl) => {
  gameEl.currentTarget.gameEl.remove();
};

const viewOptions = (game) => {
  const gamePanel = game.currentTarget.gameEl.querySelector(".game");
  const gameOptions = game.currentTarget.gameEl.querySelector(".game-options");
  let activeGame = document.querySelector(".game.active");
  let games = document.querySelectorAll(".games-list__game");
  let deleteBtn = game.currentTarget.gameEl.querySelector(".btn--delete-game");
  deleteBtn.gameEl = deleteBtn.parentNode.parentNode;
  for (let i = 0; i < games.length; i++) {
    games[i].querySelector(".game").classList.remove("active");
    games[i].querySelector(".game-options").classList.remove("active");
    deleteBtn.removeEventListener("click", removeGame);
  }

  if (gamePanel === activeGame) {
    gamePanel.classList.remove("active");
    gameOptions.classList.remove("active");
    deleteBtn.removeEventListener("click", removeGame);
  }
  if (gamePanel !== activeGame) {
    gamePanel.classList.add("active");
    gameOptions.classList.add("active");
    deleteBtn.addEventListener("click", removeGame);
  }
};

export const viewOptionsHandler = () => {
  let gamePanels = document.querySelectorAll(".game");
  gamePanels.forEach(function (game) {
    game.gameEl = game.parentNode;
    game.removeEventListener("click", viewOptions);
    game.addEventListener("click", viewOptions);
  });
};
