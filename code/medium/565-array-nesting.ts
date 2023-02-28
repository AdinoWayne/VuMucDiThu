function arrayNesting(nums: number[]): number {
    let len = nums.length
    let i = 0
    let maxLength = 0
    while (i < len) {
        var setArr = []
        
        const recursionBaby = n => {
            if(setArr.indexOf(nums[n]) == -1) {
                setArr.push(nums[n])
                recursionBaby(nums[n])   
            }
        }

        recursionBaby(i)

        if(setArr.length > maxLength) {
            maxLength = setArr.length
        }

        i++
    }


    return maxLength
};
