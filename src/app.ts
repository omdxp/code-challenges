let pos = 2;
let len = 10;

function step() {
  if (pos === 0) {
    pos++;
  } else if (pos === len) {
    pos--;
  } else {
    if (Math.random() > 0.5) {
      pos++;
    } else {
      pos--;
    }
  }
}

let found = false;

for (let i = 0; i < len; i++) {
  let attempt = i;
  console.log("Gonna check", attempt);
  if (attempt === pos) {
    found = true;
    console.log("Found the rabbit at", pos);
    break;
  }
  step();
}

if (!found) {
  for (let i = 1; i < len; i++) {
    let attempt = i;
    console.log("Gonna check", attempt);
    if (attempt === pos) {
      found = true;
      console.log("Found the rabbit at", pos);
      break;
    }
    step();
  }
}

if (!found) {
  console.log("Tough luck :-(");
}
