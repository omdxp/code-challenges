function convertToRoman(num: number) {
  const roman: Record<string, number> = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = "";

  for (const key in roman) {
    while (num >= roman[key]) {
      result += key;
      num -= roman[key];
    }
  }

  return result;
}

const result = convertToRoman(42);
console.log(result);
