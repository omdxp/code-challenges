function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

const str: string = "Hello World!";

console.log(reverseString(str));
