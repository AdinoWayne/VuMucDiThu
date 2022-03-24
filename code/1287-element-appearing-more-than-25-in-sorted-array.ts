<!-- Solution 1: Linear Scan
Time complexity: O(n)
Space complexity: O(1) -->
function findSpecialInteger(arr: number[]): number {
    const s = Math.floor(arr.length / 4);
    for (let i = 0; i + s < arr.length; ++i)
      if (arr[i] === arr[i + s]) return arr[i];
    return -1;
};


<!-- Solution 2: Binary Search
The answer must be one of (s[0], s[l/4], s[l/2], s[l*3/4])
Using binary search to find the range of each number, the one has more than 1/4 of total elements is the answer.

Time complexity: O(logn)
Space complexity: O(1) -->

function findSpecialInteger(arr: number[]): number {
  const len = arr.length / 4
  const search = (left, right, target, direction = 'left') => {
    let index = -1
    while (left <= right) {
      const middle = Math.floor(left + (right - left) / 2)
      if (arr[middle] === target) {
        index = middle
        if (direction === 'left') {
          right = middle - 1
        } else {
          left = middle + 1
        }
      } else if (arr[middle] < target) {
        left = middle + 1
      } else {
        right = middle - 1
      }
    }
    return index
  }
  for (let i = 1; i <= 3; i++) {
    const index = Math.floor(len * i)
    const num = arr[index]
    const loIndex = search(0, index, num, 'left')
    const hiIndex = search(index, arr.length - 1, num, 'right')
    if (hiIndex - loIndex + 1 > len) {
      return num
    }
  }
};
