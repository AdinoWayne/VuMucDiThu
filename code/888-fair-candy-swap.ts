function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
  const harf = (aliceSizes.reduce((prev, next) => { return prev + next }, 0) - bobSizes.reduce((prev, next) => { return prev + next }, 0)) / 2;
  for (let i = 0; i < aliceSizes.length; i++) {
    if (bobSizes.includes(aliceSizes[i] - harf)) {
      return [aliceSizes[i], aliceSizes[i] - harf];
    }
  }
};
