function judgeSquareSum(c: number): boolean {
    let low = 0;
    let high = Math.floor(Math.sqrt(c));
    
    while (low <= high) {
        const sum = low*low + high*high;
        const mid = Math.floor(low + (high - low)/2);
        
        
        if (sum === c) {
            return true
        }
        
        if (sum < c) {
            low = mid*mid + high*high < c ? mid + 1: low +1;
        }
        
        if (sum > c) {
            high = mid * mid + low * low > c ? mid - 1 : high - 1;
        }
        
    }
    
    return false;
};

// Since a^2 + b^2 = c => a = sqrt(c - b^2) => a <= sqrt(c).
// Time: O(sqrt(c)), where c <= 2^31-1
// Space: O(1)
