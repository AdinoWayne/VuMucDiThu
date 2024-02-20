function repairCars(ranks: number[], cars: number): number {
    let low = 1;
  let high = Math.max(...ranks) * cars * cars;
  let ans = high;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (isOk(ranks, mid, cars)) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
};

function isOk(ranks, mid, cars) {
  let repairedCars = 0;
  for (const rank of ranks) {
    repairedCars += Math.floor(Math.sqrt(mid / rank));
  }

  return repairedCars >= cars;
}
