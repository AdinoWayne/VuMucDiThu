function numJewelsInStones(jewels: string, stones: string): number {
  let c = 0;
  for (let i = 0; i < stones.length; ++i) if (jewels.indexOf(stones[i]) > -1) ++c;
  return c;
};
