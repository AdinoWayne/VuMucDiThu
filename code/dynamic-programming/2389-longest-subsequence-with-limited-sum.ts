function answerQueries(nums: number[], queries: number[]): number[] {
    nums.sort((a, b) => a - b);
    const ans = [];
    
    for (let q of queries) {
        let cur = 0;
        for (const n of nums) {
            if (q - n >= 0) {
                q -= n;
                cur++;
            }
        }
        ans.push(cur);
    }
    
    return ans;
};
