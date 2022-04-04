// T(n) = O(logn)
function binarySearch(arr: boolean[]) {
  let lower = 0;
  let upper = arr.length - 1;

  while (lower <= upper) {
    const mid = lower + Math.floor((upper - lower) / 2);

    if (arr[mid - 1] === true && arr[mid] === false) return mid;

    if (arr[mid - 1] === false && arr[mid] === false) upper = mid - 1;
    else lower = mid + 1;
  }

  return -1;
}

function percentage(arr: boolean[], index: number) {
  return (index / arr.length) * 100;
}

function longestBuildRun(buildRuns: boolean[][]) {
  let stack = [];
  for (let i = 0; i < buildRuns.length; i++) {
    stack.push(percentage(buildRuns[i], binarySearch(buildRuns[i])));
  }
  return stack.indexOf(Math.max(...stack));
}

const buildRuns = [
  [true, true, true, true, false, false, false],
  [true, true, false, false],
  [true, true, true, false],
  [true, true, true, true, false],
  [true, true, true, false],
];

console.log(longestBuildRun(buildRuns));
