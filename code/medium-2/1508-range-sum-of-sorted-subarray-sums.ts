function rangeSum(nums: number[], n: number, left: number, right: number): number {
    let data = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            let subarr = nums.slice(i, j);
            data.push(sum(subarr));
        }
    }
    data.sort((a, b) => a - b);
    let res;
    res = data.slice(left - 1, right);
    return sum(res) % 1000000007;
};

const sum = (arr) => {
    return arr.reduce((acc, cur) => acc + cur);
};
