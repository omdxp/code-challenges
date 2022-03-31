/**
 * @description this function sort an array with meandering algorithm
 * @param unsorted
 * @returns
 */
function meanderingArray(unsorted: number[]): number[] {
  let sorted: number[] = [];
  let startIndex: number = 0;
  let endIndex: number = unsorted.length - 1;
  let flag: boolean = true;
  unsorted.sort((a, b) => a - b);
  for (let i = 0; i < unsorted.length; i++) {
    if (flag) {
      sorted[i] = unsorted[endIndex--];
    } else {
      sorted[i] = unsorted[startIndex++];
    }

    flag = !flag;
  }
  return sorted;
}

console.log(meanderingArray([7, 5, 2, 7, 8, -2, 25, 25]));
