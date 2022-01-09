function repeatString(str: string, num: number): Array<string> | string {
  if (num <= 0) {
    return "";
  }
  return Array(num).fill(str).join("");
}

function repeatString2(str: string, num: number): Array<string> | string {
  if (num <= 0) {
    return "";
  }
  return str.repeat(num);
}

const str: string = "Hello";
const num: number = 3;
const res = repeatString(str, num);
console.log(res);
