function numWaysX(n: number, x: number[]): number {
  if (n === 0) return 1;
  let nums: number[] = Array.from({ length: n + 1 }, () => 0);
  nums[0] = 1;
  let total: number;
  for (let i = 1; i <= n; i++) {
    total = 0;
    for (let j = 0; j < x.length; j++) {
      if (i - j >= 0) total += nums[i - j];
    }
    nums[i] = total;
  }
  return nums[n];
}

console.log(numWaysX(4, [1, 3, 5]));
