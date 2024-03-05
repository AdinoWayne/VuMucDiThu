function minimumOperations(num: string): number {
    const nums = num.split("");
    let curMin = nums.length
    for(let curIdx = nums.length -1; curIdx >0; curIdx -= 1){
        const curDigit = nums[curIdx]
        
        if(curDigit !== '5' && curDigit !== '0' ){
            continue;
        }
        if(curDigit === '0'){
            // find the closes 0 digit, if not found then need to delete everything else
            const closesZero = nums.lastIndexOf('0', curIdx-1)
            const closesFive = nums.lastIndexOf('5', curIdx-1)
            console.log(closesFive)
            
            const closerDigit = Math.max(closesZero, closesFive);
            if(closerDigit === -1){
                curMin = Math.min(curMin, nums.length -1)
            }else {
                const newNumOfOp = curIdx - closerDigit - 1 + nums.length - 1 - curIdx
                curMin = Math.min(curMin, newNumOfOp)
            }
        } else if (curDigit === '5'){
            // find the closes 2 or 7, if not found then need to delete everything 
            const closesTwo = nums.lastIndexOf('2', curIdx-1)
            const closesSeven = nums.lastIndexOf('7', curIdx-1)
            
            const closerDigit = Math.max(closesTwo, closesSeven);
            if(closerDigit !== -1){
                const newNumOfOp = curIdx - closerDigit - 1 + nums.length - 1 - curIdx
                curMin = Math.min(curMin, newNumOfOp)
            }
            
        }
    }
    return curMin;
};
