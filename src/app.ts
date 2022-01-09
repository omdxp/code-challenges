function largestOfFour(arrays: Array<Array<number>>): number[] {
  let maxes: number[] = [];
  for (let i = 0; i < arrays.length; i++) {
    const arr = arrays[i];
    let max: number = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > max) {
        max = arr[j];
      }
    }
    maxes.push(max);
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
