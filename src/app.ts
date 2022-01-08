function factoriolize(num: number): number {
  let res: number = 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
  }
  return res;
}

function factoriolizeRec(num: number): number {
  if (num === 1) {
    return num;
  }
  return num * factoriolize(num - 1);
}

const res = factoriolizeRec(5);
console.log(res);
