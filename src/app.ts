function findStart(arr: number[], target: number) {
  if (arr[0] === target) return 0;
  let left = 0;
  let right = arr.length - 1;
  let mid: number;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === target && arr[mid - 1] < target) return mid;
    else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// O(n)
function firstAndLastPosition(arr: number[], target: number) {
  if (!arr.includes(target)) return [-1, -1];
  let start = findStart(arr, target);
  let end = start;
  while (end + 1 < arr.length && arr[end + 1] === target) {
    end++;
  }
  return [start, end];
}

const arr = [2, 4, 5, 5, 5, 5, 5, 5, 7, 9, 9];
const target = 5;
console.log(firstAndLastPosition(arr, target));
