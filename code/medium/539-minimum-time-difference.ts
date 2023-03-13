function findMinDifference(timePoints: string[]): number {
  timePoints.sort();
  const arrPoint = timePoints.map(el => {
    let [hours, minutes] = el.split(':');
    return Number(hours) * 60 + Number(minutes);
  })
  
  timePoints.push(timePoints[0] + 1440);
  let minDiff = Infinity;
  for (let i = 1; i < timePoints.length; i ++) {
    minDiff = Math.min(minDiff, arrPoint[i] - arrPoint[i - 1]);
  }
  
  return minDiff;
};

// Time complexity is O(nlogn)
// Space complexity is O(n)
