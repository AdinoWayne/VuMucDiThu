function minTimeToType(word: string): number {
  let curr = 'a', res = 0

  for (let i = 0; i < word.length; i++) {
    const move = Math.abs(word.charCodeAt(i) - curr.charCodeAt(0))
    if (move) res += Math.min(move, 26 - move)
    curr = word[i]
    res++
  }
  return res
};
