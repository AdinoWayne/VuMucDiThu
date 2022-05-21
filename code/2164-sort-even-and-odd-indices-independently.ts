function sortEvenOdd(nums: number[]): number[] {
        let even = new Array(101).fill(0);
        let odd = new Array(101).fill(0);
        const length = nums.length;
        for (let i = 0; i < length; ++i) {
            if (i % 2 == 0) {
                even[nums[i]]++;
            } else {
                odd[nums[i]]++;
            }
        }
        let e = 0;
        let o = 100;
        for (let i = 0; i < length; ++i) {
            if (i % 2 == 0) {
                while (even[e] == 0) {
                    ++e;
                }
                nums[i] = e;
                even[e]--;
            } else {
                while(odd[o] == 0) {
                    --o;
                }
                nums[i] = o;
                odd[o]--;
            }
        }
        return nums;
};
