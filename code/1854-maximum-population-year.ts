function maximumPopulation(logs: number[][]): number {
    let pop = new Array(2051).fill(0);
    for (const log of logs) {
      for (let y = log[0]; y < log[1]; ++y)
        ++pop[y];
    }
    let ans = -1;
    let max_pop = 0;
    for (let y = 1950; y <= 2050; ++y) {
      if (pop[y] > max_pop) {
        max_pop = pop[y];
        ans = y;
      }
    }
    return ans;
};
