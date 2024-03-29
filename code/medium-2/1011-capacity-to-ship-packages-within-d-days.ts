function shipWithinDays(weights: number[], days: number): number {
  let maxCapacity = 0;
  let minCapacity = 0;

  for (const weight of weights) {
    maxCapacity += weight;
    minCapacity = Math.max(minCapacity, weight);
  }

  while (minCapacity < maxCapacity) {
    const capacity = Math.floor((maxCapacity + minCapacity) / 2);
    let currentDays = 1;
    let currentLoad = 0;
    for (const weight of weights) {
      currentLoad += weight;
      if (currentLoad > capacity) {
        currentDays++;
        currentLoad = weight;
      }
    }

    if (currentDays > days) minCapacity = capacity + 1;
    else maxCapacity = capacity;
  }

  return minCapacity;
};
// Time complexity  is O(n * log(sum(weights)))
// Space complexity is O(1).
