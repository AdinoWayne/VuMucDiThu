function stoneGameVI(aliceValues: number[], bobValues: number[]): number {
  const scores = [0, 0];
  let turn = 0;
  const N = bobValues.length;

  const tactics = aliceValues.reduce((acc, v, i) => {
    acc.push({
      0: v,
      1: bobValues[i],
      s: v + bobValues[i],
    })
    return acc;
  }, []).sort((a, b) => b.s - a.s);
  
  for (let i = 0; i < N; i++) {
    scores[turn] += tactics[i][turn];
    turn ^= 1;
  }
  
  return scores[0] > scores[1] ? 1 : (scores[0] < scores[1] ? -1 : 0);
};
// Time Complexity: O(N log N)
// Space Complexity: O(N)
