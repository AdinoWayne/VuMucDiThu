function repeatedNTimes(nums: number[]): number {
    let lenN = nums.length/2
    for(let num of nums){
        const n = nums.filter(elem => elem === num)
        if(n.length == lenN)
            return num
    }
};
