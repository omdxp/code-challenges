function rot13(str: string) {
  let solved = "";
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 65 && code <= 77) {
      solved += String.fromCharCode(code + 13);
    } else if (code >= 78 && code <= 90) {
      solved += String.fromCharCode(code - 13);
    } else {
      solved += String.fromCharCode(code);
    }
  }
  return solved;
}

const str = "SERR PBQR PNZC";
const res = rot13(str);
console.log(res);
