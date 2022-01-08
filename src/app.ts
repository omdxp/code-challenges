function titleCase(str: string): string {
  return str
    .toLowerCase()
    .split(" ")
    .map((e) => e[0].toUpperCase() + e.slice(1))
    .join(" ");
}

const str: string = "hello my guys how are YOu ?";
const res = titleCase(str);
console.log(res);
