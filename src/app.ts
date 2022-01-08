function titleCase(str: string) {
  const words = str.split(" ");
  let titleCaseWords: string[] = [];
  for (const word of words) {
    titleCaseWords.push(word[0].toUpperCase() + word.toLowerCase().slice(1));
  }
  return titleCaseWords.join(" ");
}

const str: string = "hello my guys how are YOu ?";
const res = titleCase(str);
console.log(res);
