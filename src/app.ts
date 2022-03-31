/**
 * @description this function return the number of balanced parentheses
 * @param s
 */
function getMin(s: string): number {
  let stack = [];
  let min = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) {
        min++;
      } else {
        stack.pop();
      }
    }
  }
  return min + stack.length;
}

console.log(getMin("()))"));
