function validAnagrams(s1: string, s2: string) {
  if (s1.length !== s2.length) return false;
  let freq1: Record<string, number> = {}; // O(n) space complexity
  let freq2: Record<string, number> = {}; // O(n) space complexity
  // O(n)
  for (let i = 0; i < s1.length; i++) {
    if (freq1.hasOwnProperty(s1[i])) freq1[s1[i]]++;
    else freq1[s1[i]] = 1;
  }
  // O(n)
  for (let i = 0; i < s2.length; i++) {
    if (freq2.hasOwnProperty(s2[i])) freq2[s2[i]]++;
    else freq2[s2[i]] = 1;
  }
  // O(n)
  for (const key in freq1) {
    if (!freq2.hasOwnProperty(key) || freq2[key] !== freq1[key]) return false;
  }
  return true;
}

console.log(validAnagrams("garden", "danger"));
