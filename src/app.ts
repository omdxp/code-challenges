function secondLargest(array: number[]) {
  if (array.length < 2) return null;
  const set = new Set(array);
  let b: number[] = [];
  for (const iterator of set.values()) {
    b.push(iterator);
  }
  b.sort((a, b) => a - b);
  return b[b.length - 2];
}

const arr = [9, 42, 53, 2, 6, 9];
console.log(secondLargest(arr));
