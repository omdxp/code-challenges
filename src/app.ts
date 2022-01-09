function largestOfFour(arrays: Array<Array<number>>): number[] {
  let maxes: number[] = [];
  for (let i = 0; i < arrays.length; i++) {
    const arr = arrays[i].sort((a: number, b: number) => b - a);
    maxes.push(arr[0]);
  }
  return maxes;
}

const arr = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];
const res = largestOfFour(arr);
console.log(res);
