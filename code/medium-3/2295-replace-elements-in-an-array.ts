function arrayChange(nums: number[], operations: number[][]): number[] {
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
        let num = nums[i]
        map.set(num, i)
    }
    for(let op of operations){
        let key = op[0]
        let value = op[1]
        if(map.has(key)){
            const idx = map.get(key)
            map.set(value, idx)
            map.delete(key)
        }
    }
    for(let [key, idx] of map){
        nums[idx] = key
    }
    return nums
};
// TC O(n)
// SC O(n)
