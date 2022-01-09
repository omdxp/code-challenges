function secondDegreeSol(
  equation: string
): [number, number] | number | [string, string] {
  const parts = equation.split(" ");
  const a: number = parts[0].split("x")[0] === "" ? 1 : +parts[0].split("x")[0];
  const b: number = parts[2].split("x")[0] === "" ? 1 : +parts[2].split("x")[0];

  const c: number = parseInt(parts[4]) - parseInt(parts[6]);
  const delta: number = b * b - 4 * a * c;
  if (delta > 0) {
    const sol1 = (-b - Math.sqrt(delta)) / (2 * a);
    const sol2 = (-b + Math.sqrt(delta)) / (2 * a);
    return [sol1, sol2];
  } else if (delta === 0) {
    return (-b / 2) * a;
  } else {
    const sol1 = `${-b / (2 * a)} - ${Math.sqrt(delta * -1) / (2 * a)}i`;
    const sol2 = `${-b / (2 * a)} + ${Math.sqrt(delta * -1) / (2 * a)}i`;
    return [sol1, sol2];
  }
}

const equation: string = "2x^2 + x + 1 = 3";
const res = secondDegreeSol(equation);
console.log(res);
