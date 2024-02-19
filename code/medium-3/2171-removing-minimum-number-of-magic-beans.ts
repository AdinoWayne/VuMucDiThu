function minimumRemoval(beans: number[]): number {
    const N = beans.length;
    const sum = beans.reduce((acc, c) => c + acc, 0);
    beans.sort((a,b) => a - b);
    let ans = Infinity;
    for(let i = 0 ; i < beans.length; i++) {
        ans = Math.min(ans, sum - (N - i) * beans[i])
    }
    return ans;
};
// TC O(nLogn) 
// SC O(1)
