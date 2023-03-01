function findRadius(houses: number[], heaters: number[]): number {
  heaters.sort((a, b) => a - b);
  return Math.max(...houses.map(h => findMinDistance(h, heaters)));
};

const findMinDistance = (house, heaters) => {
  let left = 0;
  let right = heaters.length - 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (heaters[mid] <= house && house <= heaters[mid + 1]) {
      return Math.min(house - heaters[mid], heaters[mid + 1] - house);
    } else if (heaters[mid] <= house) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (left === 0) return heaters[0] - house;
  if (left === heaters.length) return house - heaters[heaters.length - 1];
};

// The time complexity of this algorithm is O(n log n), where n is the total number of houses and heaters.

// The binary search algorithm takes O(log n) time to complete, and since it is called for each house, the overall time complexity is O(n log n).

// Sorting the heaters array takes O(n log n) time, which is dominated by the binary search time, so the overall time complexity is still O(n log n).
