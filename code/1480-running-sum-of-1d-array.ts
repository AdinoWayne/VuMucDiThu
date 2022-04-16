function runningSum(nums: number[]): number[] {
        let sum = 0

        let sum_arr = []
      
        for (let i of nums) {
            sum += i
            sum_arr.push(sum)
        }
        return sum_arr
};
