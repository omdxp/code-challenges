// T(n,k) = O(nlogn)
// S(n,k) = O(1)
function findKthLargestElement(arr: number[], k: number) {
  if (k < 1 || k > arr.length - 1) return null;
  const set = new Set(arr);
  let b: number[] = [];
  for (const iterator of set.values()) {
    b.push(iterator);
  }
  // O(nlogn)
  b.sort((a, b) => a - b);
  // O(1)
  return b[b.length - k];
}

const arr = [332, 23, 5, 23, 6, 757];
const k = 6;
console.log(findKthLargestElement(arr, k));
