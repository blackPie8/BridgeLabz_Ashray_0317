function countDistinctSubsequences(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      let seen = new Set();
      for (let j = i; j < str.length; j++) {
        if (!seen.has(str[j])) {
          seen.add(str[j]);
          count++;
        }
      }
    }
    return count;
  }
  
  const str = "abcbac";
  console.log(countDistinctSubsequences(str));
