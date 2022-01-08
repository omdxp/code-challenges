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

type EqType = "sum" | "sub" | "mul" | "div";

function missingDigits(equation: string) {
  const parts = equation.split(" ");
  let eqType: EqType;
  if (parts.includes("+")) {
    eqType = "sum";
  } else if (parts.includes("-")) {
    eqType = "sub";
  } else if (parts.includes("*")) {
    eqType = "mul";
  } else if (parts.includes("/")) {
    eqType = "div";
  } else {
    throw new Error("Invalid equation");
  }

  if (parts[0].includes("?")) {
    for (let i = 0; i < 10; i++) {
      const num1 = +parts[0].replace("?", i.toString());
      if (eqType === "sum" && checkSum(num1, +parts[2], +parts[4])) {
        return i;
      }
      if (eqType === "sub" && checkSub(num1, +parts[2], +parts[4])) {
        return i;
      }
      if (eqType === "mul" && checkMul(num1, +parts[2], +parts[4])) {
        return i;
      }
      if (eqType === "div" && checkDiv(num1, +parts[2], +parts[4])) {
        return i;
      }
    }
  }
  if (parts[2].includes("?")) {
    for (let i = 0; i < 10; i++) {
      const num2 = +parts[2].replace("?", i.toString());
      if (eqType === "sum" && checkSum(+parts[0], num2, +parts[4])) {
        return i;
      }
      if (eqType === "sub" && checkSub(+parts[0], num2, +parts[4])) {
        return i;
      }
      if (eqType === "mul" && checkMul(+parts[0], num2, +parts[4])) {
        return i;
      }
      if (eqType === "div" && checkDiv(+parts[0], num2, +parts[4])) {
        return i;
      }
    }
  }
  if (parts[4].includes("?")) {
    for (let i = 0; i < 10; i++) {
      const res = +parts[4].replace("?", i.toString());
      if (eqType === "sum" && checkSum(+parts[0], +parts[2], res)) {
        return i;
      }
      if (eqType === "sub" && checkSub(+parts[0], +parts[2], res)) {
        return i;
      }
      if (eqType === "mul" && checkMul(+parts[0], +parts[2], res)) {
        return i;
      }
      if (eqType === "div" && checkDiv(+parts[0], +parts[2], res)) {
        return i;
      }
    }
  }
}

const res = missingDigits("14 + 1? = 24");
console.log(res);
