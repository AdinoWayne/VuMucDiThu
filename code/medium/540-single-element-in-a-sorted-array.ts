function singleNonDuplicate(nums: number[]): number {
    if (nums.length == 1) return nums[0];
    const bsa = (start, end) => {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] == nums[mid - 1]) return mid % 2 ? bsa(mid + 1, end) : bsa(start, mid);
        if (nums[mid] == nums[mid + 1]) return mid % 2 ? bsa(start, mid - 1) : bsa(mid, end);
        return nums[mid];
    }
    return bsa(0, nums.length - 1);
};
