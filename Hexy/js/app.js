import { generateBoard } from "./mapGenerator.js";
import { drawCardStage } from "./hexChoice.js";

const appInit = () => {
  generateBoard();
  drawCardStage();
};

appInit();
