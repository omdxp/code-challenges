function confirmEnding(str: string, target: string) {
  console.log(str.substring(str.length - target.length));

  return str.substring(str.length - target.length) === target;
}

const str: string = "He is cool";
const res = confirmEnding(str, "cool");
console.log(res);
