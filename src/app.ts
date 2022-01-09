function truncateString(str: string, num: number): string | void {
  if (num <= 3) return;
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }
  return str;
}

const str: string = "Hello my guys how are you doing?";
const num: number = 5;
const res = truncateString(str, num);
console.log(res);
