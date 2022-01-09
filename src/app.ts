function mutation(arr: [string, string]) {
  const first = arr[0].toLowerCase();
  const second = arr[1].toLowerCase();

  for (const letter of second) {
    if (first.indexOf(letter) === -1) return false;
  }
  return true;
}

const arr: [string, string] = ["hello", "hel"];
const res = mutation(arr);
console.log(res);
