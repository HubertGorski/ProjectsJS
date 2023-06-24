class Map {
  constructor(xCoordStart, yCoordStart, figure, size) {
    this.xCoordStart;
    this.yCoordStart;
    this.figure;
    this.size;
    this.spaceY = 12.9;
    this.spaceX = 12.7;
    let yCoord = yCoordStart;
    let xCoord = xCoordStart;
    const board = document.querySelector(".board");
    for (let y = 0; y <= size; y++) {
      for (let x = 0; x < size; x++) {
        const el = document.createElement("div");
        el.style.top = `${yCoord}rem`;
        el.style.left = `${xCoord}rem`;
        el.classList.add(figure);
        if (figure === "hex-outer") {
          el.innerHTML = `
          <div class="hex-inner"></div>
          `;
        }
        board.append(el);
        xCoord = xCoord + this.spaceX;
        yCoord = yCoord + this.spaceY;
      }
      yCoord = yCoordStart + this.spaceY * y;
      xCoord = xCoordStart - this.spaceX * y;
    }
  }
}

new Map(52.8, 4, "hex-outer", 5);
new Map(58.2, 22.1, "square", 4);
