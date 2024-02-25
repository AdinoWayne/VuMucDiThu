function colorTheArray(n: number, queries: number[][]): number[] {
let nums = new Array(n).fill(0);

  let numOfAdjEles = 0;
  let answer = new Array(queries.length);

  for (let q = 0; q < queries.length; q++) {
    let [indexi, coloriTo] = queries[q];
    let currEle = nums[indexi];

    if (currEle !== coloriTo) {
      let leftEle = nums[indexi - 1];
      let rightEle = nums[indexi + 1];

      if (currEle) {
        // Before changing current element
        if (leftEle === currEle && currEle === rightEle) {
          numOfAdjEles -= 2;
        } else if (leftEle === currEle || currEle === rightEle) {
          numOfAdjEles -= 1;
        } else {
          numOfAdjEles -= 0;
        }
      }

      // Change current element
      nums[indexi] = coloriTo;
      currEle = nums[indexi];

      // After changing current element
      if (leftEle === currEle && currEle === rightEle) {
        numOfAdjEles += 2;
      } else if (leftEle === currEle || currEle === rightEle) {
        numOfAdjEles += 1;
      } else {
        numOfAdjEles += 0;
      }
    }

    answer[q] = numOfAdjEles;
  }

  return answer;
};
