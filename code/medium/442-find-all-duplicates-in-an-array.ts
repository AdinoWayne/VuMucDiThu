function findDuplicates(nums: number[]): number[] {
    const duplicates = []; 
    for (const currentNum of nums) {
        const otherIndex = Math.abs(currentNum) - 1;

        if (nums[otherIndex] > 0) {
            nums[otherIndex] = nums[otherIndex] * (-1);
        }
        else {
            duplicates.push(Math.abs(currentNum));
        }
    }
    return duplicates;
};

// when find a number i, flip the number at position i-1 to negative. 
// if the number at position i-1 is already negative, i is the number that occurs twice.
// O(n) Time
// O(1) Space
