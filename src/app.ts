function firstAndLastPosition(arr: number[], target: number) {
  if (!arr.includes(target)) return [-1, -1];
  let counter = {
    start: 0,
    end: 0,
  };
  // O(n)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      if (counter.start === 0) {
        counter = {
          start: i,
          end: i,
        };
      } else {
        counter.end++;
      }
    }
  }
  return [counter.start, counter.end];
}

const arr = [2, 4, 5, 5, 5, 5, 5, 5, 7, 9, 9];
const target = 5;
console.log(firstAndLastPosition(arr, target));
