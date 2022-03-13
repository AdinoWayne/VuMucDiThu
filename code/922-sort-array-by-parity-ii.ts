function sortArrayByParityII(nums: number[]): number[] {
  let odd = [],
    even = [],
    sol = [];
  nums.forEach((num) => {
    if (num % 2 == 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  });
  for (let i in odd) {
    sol.push(even[i]);
    sol.push(odd[i]);
  }
  return sol;
};
