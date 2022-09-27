function largestInteger(num: number): number {
    const odd = [];
    const even = [];
    const nums = String(num).split('')
    
    for(let i = 0; i < nums.length; i++){
        if(parseInt(nums[i], 10) % 2 === 0) even.push(parseInt(nums[i]))
        else odd.push(parseInt(nums[i]))
    }
    
    odd.sort((a,b) => a-b)
    even.sort((a,b) => a-b)
    
    const largestNum = [];
    for(let i = 0; i < nums.length; i++){
        if(parseInt(nums[i], 10) % 2 === 0) largestNum.push(even.pop())
        else largestNum.push(odd.pop())
    }

    return parseInt(largestNum.join(''))
};
