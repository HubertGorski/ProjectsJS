const hexName = [
  "Vladimir Ulrich",
  "Rita Murali",
  "Aaliyah Maksim",
  "Macdara Anoop",
  "Lina Bento",
  "Vaska Wigand",
  "Ganzorig Traianus",
  "Revaz Beileag",
  "Aristides Kyree",
  "Tjaard Dezba",
  "Liane Akpofure",
  "Ealisaid Mathilde",
  "Adelina Assumpta",
  "Zaki Christine",
  "Vladimir Ulrich",
  "Rita Murali",
  "Aaliyah Maksim",
  "Macdara Anoop",
  "Lina Bento",
  "Vaska Wigand",
  "Ganzorig Traianus",
  "Revaz Beileag",
  "Aristides Kyree",
  "Tjaard Dezba",
  "Liane Akpofure",
  "Ealisaid Mathilde",
  "Adelina Assumpta",
  "Zaki Christine",
];
const hexTypeToColor = {
  Enemy: "red",
  Buff: "blue",
  Neutral: "yellow",
  Dark: "black",
  Friend: "green",
};

export const hexs = [];
class Hex {
  constructor(name, type, index) {
    this.name = name;
    this.type = type;
    this.index = index;
    hexs.push([this.name, this.type, this.index]);
  }
}

const hexColors = [
  hexTypeToColor.Buff,
  hexTypeToColor.Dark,
  hexTypeToColor.Enemy,
  hexTypeToColor.Friend,
  hexTypeToColor.Neutral,
];

const createRandomHexs = () => {
  const BOARD_SIZE = 24;
  for (let x = 0; x < BOARD_SIZE; x++) {
    let hexTypeRandom = Math.floor(Math.random() * hexColors.length);
    let hexTypeActual = hexColors[hexTypeRandom];
    new Hex(hexName[x], hexTypeActual, x);
  }
};
createRandomHexs();
