let arr = [1, 2, 4, 4];

// search for 2 elements that sums to 8
let result = arr.filter((x) => arr.includes(8 - x));

console.log(result);
