// T(n) = O(n)
// S(n) = S(n)
function firstRecChar(str: string) {
  let freq: Record<string, number> = {};
  for (let i = 0; i < str.length; i++) {
    if (freq.hasOwnProperty(str[i])) freq[str[i]]++;
    else freq[str[i]] = 1;
  }
  for (const key in freq) {
    if (freq[key] > 1) return key;
  }
  return null;
}

console.log(firstRecChar("ABAC"));
