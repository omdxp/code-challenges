function palindrome(str: string): boolean {
  const reg = /[\W_]/g;
  const s: string = str.toLowerCase().replace(reg, "");
  return s === s.split("").reverse().join("");
}

const str: string = "racecar";
const res = palindrome(str);
console.log(res);
