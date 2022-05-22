function mostFrequent(nums: number[], key: number): number {
        let freq = new Array(1001).fill(0)

        for (let i = 1; i < nums.length; i++) {
            if (nums[i - 1] == key) { 
                freq[nums[i]]++;
            }
        }

        let max = 0;
        for (let i = 1; i < freq.length; i++) {
            if (freq[i] > freq[max]) {
                max = i;
            }
        }
        return max;
};
