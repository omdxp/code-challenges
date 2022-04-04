const alph: Record<string, number> = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

function helper(data: string, k: number, memo: number[]) {
  if (k === 0) return 1;
  let s = data.length - 1;
  if (data[s] === "0") return 1;
  if (memo[k]) return memo[k];
  let result: number = helper(data, k - 1, memo);
  if (k >= 2 && Number(data.slice(s, s + 2)) <= 26) {
    result += helper(data, k - 2, memo);
  }
  memo[k] = result;
  return result;
}

function numWays(data: string) {
  const memo: number[] = Array.from({ length: data.length + 1 });
  return helper(data, data.length, memo);
}

console.log(numWays("21322144112441232442553958433"));
