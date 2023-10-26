function averageWaitingTime(customers: number[][]): number {
  var start = customers[0][0],
    sum = 0;

  customers.map(([arrival, time]) => {
    start = Math.max(start, arrival) + time;
    sum += start - arrival;
  });

  return sum / customers.length;
};
