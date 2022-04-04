function numWays(n: number): number {
  if (n === 0 || n === 1) return 1;
  let nums: number[] = Array.from({ length: n + 1 });
  nums[0] = 1;
  nums[1] = 1;
  for (let i = 2; i <= n; i++) {
    nums[i] = nums[i - 2] + nums[i - 1];
  }
  return nums[n];
}

console.log(numWays(4));
