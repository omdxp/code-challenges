function falsyBouncer(arr: any[]) {
  return arr.filter(Boolean);
}

const arr = [1, null, NaN, 0, undefined, false, ""];
const res = falsyBouncer(arr);
console.log(res);
