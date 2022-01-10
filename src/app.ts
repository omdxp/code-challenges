function destroyer(arr: number[], ...args: number[]) {
  return arr.filter((x) => !args.includes(x));
}

const arr = [1, 2, 3, 1, 2, 3];
const res = destroyer(arr, 2, 3);
console.log(res);
