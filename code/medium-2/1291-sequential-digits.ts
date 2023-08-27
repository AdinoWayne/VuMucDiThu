function sequentialDigits(low: number, high: number): number[] {
    const digits = '123456789';
    const ans = [];
    
    const minLen = low.toString().length;
    const maxLen = high.toString().length;
    
    for (let windowSize = minLen; windowSize <= maxLen; ++windowSize) {
        for (let i = 0; i + windowSize <= digits.length; ++i) {
            const num = parseInt(digits.substring(i, i + windowSize));
            
            if (num >= low && num <= high) {
                ans.push(num);
            }
        }
    }
    return ans;
};
// TC O(1)
// SC O(1)
