function minDistance(word1: string, word2: string): number {
  const memo = {};
  const helper = (i = word1.length - 1, j = word2.length - 1) => {
    let key = `${i},${j}`;
    if (memo[key] !== undefined) {
      return memo[key];
    }
    if (i < 0 || j < 0) {
      return 0;
    }
    if (word1[i] === word2[j]) {
      const res = 1 + helper(i - 1, j - 1);
      memo[key] = res;
      return memo[key];
    }
    const res = Math.max(helper(i, j - 1), helper(i - 1, j));
    memo[key] = res;
    return memo[key];
  };
  const longestSubseq = helper();
  // find the total number of deletions by finding the difference between the length of each word and the subsequence, and then adding the two up 
  const minDeletions = word1.length + word2.length - 2 * longestSubseq;
  return minDeletions;
};
