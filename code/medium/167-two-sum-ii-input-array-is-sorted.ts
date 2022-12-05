function twoSum(numbers: number[], target: number): number[] {
  var l=numbers.length, i=0, j=l-1;
  var sum = numbers[i]+numbers[j];
  while (sum !== target) {
    sum < target ? i++ : j--;
    sum = numbers[i]+numbers[j];
  }
  return [i+1, j+1];
};
