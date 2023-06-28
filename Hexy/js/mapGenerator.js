const renderMap = (xCoordStart, yCoordStart, figure, size) => {
  const board = document.querySelector(".board");
  const spaceY = 12.9;
  const spaceX = 12.7;
  let yCoord = yCoordStart;
  let xCoord = xCoordStart;
  for (let y = 0; y <= size; y++) {
    for (let x = 0; x < size; x++) {
      const el = document.createElement("div");
      el.style.top = `${yCoord}rem`;
      el.style.left = `${xCoord}rem`;
      el.classList.add(figure);
      if (figure === "hex-outer") {
        const div = document.createElement("div");
        div.classList.add("hex-inner");
        div.classList.add("empty");
        el.append(div);
      }
      board.append(el);
      xCoord = xCoord + spaceX;
      yCoord = yCoord + spaceY;
    }
    yCoord = yCoordStart + spaceY * y;
    xCoord = xCoordStart - spaceX * y;
  }
};

renderMap(52.8, 4, "hex-outer", 5);
renderMap(58.2, 22.1, "square", 4);
