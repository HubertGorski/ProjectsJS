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
const hexType = {
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

const createRandomHexs = () => {
  for (let x = 0; x < 24; x++) {
    let hexTypeRandom = Math.floor(Math.random() * 5);
    let hexTypeActual =
      hexTypeRandom == 0
        ? hexType.Buff
        : hexTypeRandom == 1
        ? hexType.Dark
        : hexTypeRandom == 2
        ? hexType.Enemy
        : hexTypeRandom == 3
        ? hexType.Friend
        : hexTypeRandom == 4
        ? hexType.Neutral
        : "";
    new Hex(hexName[x], hexTypeActual, x);
  }
};
createRandomHexs();
