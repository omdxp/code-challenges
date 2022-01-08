function longestWord(str: string): string {
  const words = str.split(" ");
  let longestWord: string = "";
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

const str: string = "Hello my guys how    are you doing ?";
const res = longestWord(str);
console.log(res);
