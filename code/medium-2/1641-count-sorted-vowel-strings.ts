function countVowelStrings(n: number): number {
    let res = 0
    helper(n, 0)
    function helper(n, startIdx) { 
        // base case
        if (n === 0) {
            res++
            return
        }
        // recursive case
        for (let i = startIdx; i < 5; i++) {
            helper(n - 1, i)
        }
    }
    return res
};
// Time Complexity: O(5^n)
// Space Complexity: O(n)
