function reformat(s: string): string {
    let letters = s.match(/[a-zA-Z]/g) || []
    let nums = s.match(/\d/g) || []
    let res = ''
    if (Math.abs(letters.length - nums.length)>1) {
        return ''
    }
    if (letters.length > nums.length) {
        letters.forEach((e,i)=>{
            if (i==0) {
                res+=e
            } else if (nums[i-1]) {
                res+=nums[i-1]
                res+=e
            }
        })
        
    } else if(letters.length < nums.length) {
        nums.forEach((e,i)=>{
            if (i==0) {
                res+=e
            }else if (letters[i-1]) {
                res+=letters[i-1]
                res+=e
            }
        })

    }else {
        nums.forEach((e,i)=>{
            res+=e
            res+=letters[i]
        })
    }
    return res
};
