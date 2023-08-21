function minSetSize(arr: number[]): number {
  const numFreq = {};
  let count = 0;
  for (let i = 0; i < arr.length; i++) numFreq[arr[i]] ? numFreq[arr[i]]++ : (numFreq[arr[i]] = 1);

  const sortedIntegerFeq: any = Object.values(numFreq).sort((a:any, b: any) => b - a);

  for (let i = 0; i < sortedIntegerFeq.length; i++) {
    count += sortedIntegerFeq[i];
    if (count >= arr.length / 2) return i + 1;
  }
};
