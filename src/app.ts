function chunkArrayInGroups(arr: (string | number)[], size: number) {
  if (size <= 0) return;
  var result = [];
  for (var i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

const arr: (string | number)[] = ["a", "b", "c", "d", "e", "f"];
const result = chunkArrayInGroups(arr, 2);
console.log(result);
