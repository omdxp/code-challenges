const keyboardMarix = [
  ["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["Q", "S", "D", "F", "G", "H", "J", "K", "L", "M"],
  ["W", "X", "C", "V", "B", "N"],
];

interface XRange {
  x0: number;
  x1: number;
}

interface YRange {
  y0: number;
  y1: number;
}

type Keyboard = Record<string, string>;

function getKeyboard() {
  let keyboard: Partial<Keyboard> = {};
  for (let i = 0; i < keyboardMarix.length; i++) {
    for (let j = 0; j < keyboardMarix[i].length; j++) {
      const xRange: XRange = {
        x0: j,
        x1: j + 1,
      };
      const yRange: YRange = {
        y0: i,
        y1: i + 1,
      };
      keyboard[`${xRange.x0}:${xRange.x1}|${yRange.y0}:${yRange.y1}`] =
        keyboardMarix[i][j];
    }
  }
  return keyboard;
}

function mapInputToOutput(x: number, y: number) {
  let keyboard = getKeyboard();
  for (const key in keyboard) {
    const xSplit = key.split("|")[0];
    const ySplit = key.split("|")[1];
    const xRange: XRange = {
      x0: Number(xSplit.split(":")[0]),
      x1: Number(xSplit.split(":")[1]),
    };
    const yRange: YRange = {
      y0: Number(ySplit.split(":")[0]),
      y1: Number(ySplit.split(":")[1]),
    };
    if (x >= xRange.x0 && x <= xRange.x1 && y >= yRange.y0 && y <= yRange.y1) {
      return keyboard[key];
    }
  }
  return null;
}

console.log(mapInputToOutput(5, 2.8));
