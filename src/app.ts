function twoSums(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

let nums = [2, 7, 11, 15];
let target = 9;
let result = twoSums(nums, target);
console.log(result);
