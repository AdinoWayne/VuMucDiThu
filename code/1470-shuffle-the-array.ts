function shuffle(nums: number[], n: number): number[] {
    let p1 = 0
    let p2 = n  //conveniently n is the index pointer2 should be at
    const result = []
    while(p1<n){
        result.push(nums[p1])
        result.push(nums[p2])
        p1++
        p2++
    }
    return result
};
