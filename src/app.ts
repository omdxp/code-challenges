function checkSum(num1: number, num2: number, res: number) {
  return num1 + num2 === res;
}

function checkSub(num1: number, num2: number, res: number) {
  return num1 - num2 === res;
}

function checkMul(num1: number, num2: number, res: number) {
  return num1 * num2 === res;
}

function checkDiv(num1: number, num2: number, res: number) {
  return num1 / num2 === res;
}

type EquationType = "+" | "-" | "*" | "/";

function missingDigits(equation: string): [number, number] | void {
  const parts: string[] = equation.split(" ");
  const num1Str: string = parts[0];
  const num2Str: string = parts[2];
  const resStr: string = parts[4];
  const operand: EquationType = parts[1] as EquationType;
  if (num1Str.includes("?") && num2Str.includes("?")) {
    const res: number = parseInt(resStr);
    for (let i = 0; i < 10; i++) {
      const num1: number = +num1Str.replace("?", `${i}`);
      for (let j = 0; j < 10; j++) {
        const num2: number = +num2Str.replace("?", `${j}`);
        if (operand === "+" && checkSum(num1, num2, res)) {
          return [i, j];
        } else if (operand === "-" && checkSub(num1, num2, res)) {
          return [i, j];
        } else if (operand === "*" && checkMul(num1, num2, res)) {
          return [i, j];
        } else if (operand === "/" && checkDiv(num1, num2, res)) {
          return [i, j];
        }
      }
    }
  }
  if (num1Str.includes("?") && resStr.includes("?")) {
    const num2: number = parseInt(num2Str);
    for (let i = 0; i < 10; i++) {
      const num1: number = +num1Str.replace("?", `${i}`);
      for (let j = 0; j < 10; j++) {
        const res: number = +resStr.replace("?", `${j}`);
        if (operand === "+" && checkSum(num1, num2, res)) {
          return [i, j];
        } else if (operand === "-" && checkSub(num1, num2, res)) {
          return [i, j];
        } else if (operand === "*" && checkMul(num1, num2, res)) {
          return [i, j];
        } else if (operand === "/" && checkDiv(num1, num2, res)) {
          return [i, j];
        }
      }
    }
  }
  if (num2Str.includes("?") && resStr.includes("?")) {
    const num1: number = parseInt(num1Str);
    for (let i = 0; i < 10; i++) {
      const num2: number = +num2Str.replace("?", `${i}`);
      for (let j = 0; j < 10; j++) {
        const res: number = +resStr.replace("?", `${j}`);
        if (operand === "+" && checkSum(num1, num2, res)) {
          return [i, j];
        } else if (operand === "-" && checkSub(num1, num2, res)) {
          return [i, j];
        } else if (operand === "*" && checkMul(num1, num2, res)) {
          return [i, j];
        } else if (operand === "/" && checkDiv(num1, num2, res)) {
          return [i, j];
        }
      }
    }
  }
}

const res = missingDigits("? / ? = 3");
console.log(res);
