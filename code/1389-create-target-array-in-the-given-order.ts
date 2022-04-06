function createTargetArray(nums: number[], index: number[]): number[] {
    let target = []
    nums.map((e, i) => {
        target.splice(index[i], 0, e )
    })
    return target
};
