function slasher(arr: string[], howMany: number): string[] {
  return arr.slice(howMany);
}

const arr = ["a", "b", "c", "d"];
const howMany = 2;
const res = slasher(arr, howMany);
console.log(res);
