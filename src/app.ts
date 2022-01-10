function sumInRange(arr: number[], start: number, end: number): number {
  if (start > end) {
    return 0;
  }
  return arr[start] + sumInRange(arr, start + 1, end);
}

console.log(sumInRange([1, 2, 3, 4, 5], 0, 2));
