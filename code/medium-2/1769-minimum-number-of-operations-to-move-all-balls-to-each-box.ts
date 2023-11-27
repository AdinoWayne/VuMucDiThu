function minOperations(boxes: string): number[] {
  const result = Array(boxes.length).fill(0);
  let notEmpty = 0;
  let runningSum = 0;
  
  for (let i = 0; i < boxes.length; ++i) {
    result[i] += runningSum;
    if (boxes[i] === '1') ++notEmpty;
    runningSum += notEmpty;
  }
  notEmpty = 0;
  runningSum = 0;
  
  for (let i = boxes.length - 1; i >= 0; --i) {
    result[i] += runningSum;
    if (boxes[i] === '1') ++notEmpty;
    runningSum += notEmpty;
  }
  
  return result;
};
// TC O(n)
// SC O(n)
