function subarrayLCM(nums: number[], k: number): number {
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        let subarray_lcm = nums[i];
        for (let j = i; j < nums.length; j++) {
            subarray_lcm = lcm(subarray_lcm, nums[j]);
            if (subarray_lcm === k) res++;
            if (subarray_lcm > k) break;
        }
    }

    return res;
};

const gcd = (a, b) => {
    [a, b] = a > b ? [a, b] : [b, a];
    while (b !== 0) [a, b] = [b, a % b];
    return a;
};

const lcm = (a, b) => (a / gcd(a, b)) * b;
