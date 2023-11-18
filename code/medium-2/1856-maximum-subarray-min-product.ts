function maxSumMinProduct(nums: number[]): number {
    nums = [0, ...nums, 0];

    const prefixSum = [...nums];
    for (let i = 1; i < nums.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + prefixSum[i];
    }

    let stackOfIndices = [0];
    const leftIndices = new Array(nums.length).fill(0);
    for (let i = 1; i < nums.length; i++) {
        while (nums[i] <= nums[stackOfIndices[stackOfIndices.length - 1]]) {
            stackOfIndices.pop();
        }
        leftIndices[i] = stackOfIndices[stackOfIndices.length - 1];
        stackOfIndices.push(i);
    }
    stackOfIndices = [nums.length];
    const rightIndices = new Array(nums.length).fill(nums.length - 1);
    for (let i = nums.length - 2; i > 0; i--) {
        while (nums[i] <= nums[stackOfIndices[stackOfIndices.length - 1]]) {
            stackOfIndices.pop();
        }
        rightIndices[i] = stackOfIndices[stackOfIndices.length - 1] - 1;
        stackOfIndices.push(i);
    }

    let max = BigInt(0);
    for (let i = 1; i < nums.length - 1; i++) {
        const sum = BigInt(prefixSum[rightIndices[i]] - prefixSum[leftIndices[i]]);
        const minProduct = sum * BigInt(nums[i]);
        if (max < minProduct) {
            max = minProduct;
        }
    }
    return Number(max % BigInt(1000000007));
};
