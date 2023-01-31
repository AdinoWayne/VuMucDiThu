function findDuplicates(nums: number[]): number[] {
    const duplicates = []; 

    for (const currentNum of nums) {
        // Get the index that currentNum points to:
        // Note: we have to use Math.abs because the currentNum 
        // could have been flipped:
        const otherIndex = Math.abs(currentNum) - 1;

        // If the number at otherIndex > 0 (hasn't been flipped):
        if (nums[otherIndex] > 0) {
            // Flip it to negative to mark that we've visited it:
            nums[otherIndex] = nums[otherIndex] * (-1);
        }
        // If the number at otherIndex < 0 (has been flipped):
        else {
            // We know that we've visited this currentNum before because
            // it leads us to the same number.
            duplicates.push(Math.abs(currentNum));
        }
    }
    return duplicates;
};
