function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {
    const chechArithmetic = ar => {
        const diff = ar[1] - ar[0];
        for(let i = 2; i < ar.length; i++)
        if(ar[i] - ar[i-1] != diff)
            return false;
        return true;
    }
    
    return l.map((_,i) => chechArithmetic(nums.slice(l[i], r[i]+1).sort((a,b) => a-b)) )
};
// Time Complexity: O(l.length * n log n)
// Space Complexity: O(n)
