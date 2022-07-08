function secondHighest(s: string): number {
    let nums = s.split(/[A-Za-z]/).filter(a=> a!== '').join('');
    let arr=[];
    for(let i = 0; i < nums.length; i++) {
        if(!arr.includes(nums[i])) {
            arr.push(nums[i]);
        }
    }
    return arr.sort((a,b) => a-b)[arr.length-2] ? arr.sort((a,b) => a-b)[arr.length-2] : -1;
};
