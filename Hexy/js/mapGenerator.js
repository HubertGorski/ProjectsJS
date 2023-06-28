const renderMap = (mapSettings) => {
  const board = document.querySelector(".board");
  const spaceY = 12.9;
  const spaceX = 12.7;
  let yCoord = mapSettings.yCoordStart;
  let xCoord = mapSettings.xCoordStart;
  for (let y = 1; y <= mapSettings.size; y++) {
    for (let x = 1; x <= mapSettings.size; x++) {
      const tile = document.createElement("div");
      tile.style.top = `${yCoord}rem`;
      tile.style.left = `${xCoord}rem`;
      tile.classList.add(mapSettings.figure);
      if (mapSettings.figure === "hex-outer") {
        const hex = document.createElement("div");
        hex.classList.add("hex-inner");
        hex.classList.add("empty");
        tile.append(hex);
      }
      board.append(tile);
      xCoord = xCoord + spaceX;
      yCoord = yCoord + spaceY;
    }
    yCoord = mapSettings.yCoordStart + spaceY * y;
    xCoord = mapSettings.xCoordStart - spaceX * y;
  }
};

const mapSettingsHexs = {
  xCoordStart: 52.8,
  yCoordStart: 4,
  figure: "hex-outer",
  size: 5,
};
const mapSettingsSquares = {
  xCoordStart: 58.2,
  yCoordStart: 22.1,
  figure: "square",
  size: 4,
};
export const generateBoard = () => {
  renderMap(mapSettingsHexs);
  renderMap(mapSettingsSquares);
};
