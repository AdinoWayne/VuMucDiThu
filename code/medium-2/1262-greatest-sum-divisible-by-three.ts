function maxSumDivThree(nums: number[]): number {
    let remainOne = 10 ** 4;
    let remainTwo = 10 ** 4;
    let sum = 0;

    nums.forEach(num => {
        sum += num;
        if (num % 3 === 1) {
            remainTwo = Math.min(remainTwo, remainOne + num);
            remainOne = Math.min(remainOne, num);
        } else if (num % 3 === 2) {
            remainOne = Math.min(remainOne, remainTwo + num);
            remainTwo = Math.min(remainTwo, num);
        }
    });

    const remainSum = sum % 3;

    if (remainSum === 0) return sum;
    if (remainSum === 1) return sum - remainOne;
    return sum - remainTwo;
};
// Add all together, if sum%3==0, return sum.
// if sum%3==1, remove the smallest number which has n%3==1.
// if sum%3==2, remove the smallest number which has n%3==2.
// TC O(n)
// SC O(1)
