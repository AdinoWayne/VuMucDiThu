function removeAnagrams(words: string[]): string[] {
  let stack = [];
  for (let word of words) {
    if (!stack.length || !isMatch(stack[stack.length - 1], word)) stack.push(word);
  }  
  return stack;
};

function isMatch(a, b) {
  let countA = Array(26).fill(0), countB = Array(26).fill(0);
  for (let char of a) countA[char.charCodeAt() - 97]++;
  for (let char of b) countB[char.charCodeAt() - 97]++;
  for (let i = 0; i < 26; i++) {
    if (countA[i] !== countB[i]) return false;
  }
  return true;
}
