function longestPalindromSubstring(str: string) {
  let res = "";
  let resLen = 0;

  for (let i = 0; i < str.length; i++) {
    // odd length
    let l = i,
      r = i;
    while (l >= 0 && r < str.length && str[l] === str[r]) {
      if (r - l + 1 > resLen) {
        res = str.slice(l, r + 1);
        resLen = r - l + 1;
      }
      l--;
      r++;
    }
    // even length
    (l = i), (r = i + 1);
    while (l >= 0 && r < str.length && str[l] === str[r]) {
      if (r - l + 1 > resLen) {
        res = str.slice(l, r + 1);
        resLen = r - l + 1;
      }
      l--;
      r++;
    }
  }
  return res;
}

console.log(longestPalindromSubstring("abbd"));
