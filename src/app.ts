function addToSortedArray(arr: number[], num: number) {
  arr.push(num);
  return arr.sort((a, b) => a - b);
}

const arr = [1, 2, 3, 4, 5];
const res = addToSortedArray(arr, 2.5);
console.log(res);
