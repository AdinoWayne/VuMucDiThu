function minStartValue(nums: number[]): number {
        let min_n=0
        let sum_n=0
        for (const i of nums) {
            sum_n+=i
            min_n= Math.min(sum_n,min_n)
        }
        return 1-min_n
};
