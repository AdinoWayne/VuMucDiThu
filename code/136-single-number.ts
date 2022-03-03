function singleNumber(nums: number[]): number {
    let bam = {};
    for (let i = 0; i < nums.length; i++) {
        if (bam[nums[i]] == undefined) {
            bam[nums[i]] = 1;
        } else if (bam[nums[i]] === 1) {
            delete bam[nums[i]]
       }
    }
    const allkeys = Object.keys(bam);
    return parseInt(allkeys[0], 10)
};
