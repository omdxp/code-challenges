function diffArray(arr1: number[], arr2: number[]): number[] {
  let uniques: number[] = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      uniques.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      uniques.push(arr2[i]);
    }
  }
  return uniques;
}

const arr1 = [1, 2, 3, 5];
const arr2 = [1, 2, 3, 4, 5];
const res = diffArray(arr1, arr2);
console.log(res);
