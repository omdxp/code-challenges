function longestWord(str: string): string {
  const words = str.split(" ").sort((a, b) => b.length - a.length);
  return words[0];
}

const str: string = "Hello my guys how    are you doing ?";
const res = longestWord(str);
console.log(res);
