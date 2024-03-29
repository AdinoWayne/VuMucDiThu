function distributeCookies(cookies: number[], k: number): number {
    let ans = Infinity;
    let bag = Array(k).fill(0)
    function backtrack(i) {
        if(i >= cookies.length) {
            let max = -Infinity;
            for(let b of bag) max = Math.max(max, b);
            ans = Math.min(ans, max);
            return;
        }
        for(let j=0;j<k;j++) {
            bag[j] += cookies[i];
            backtrack(i+1);
            bag[j] -= cookies[i];
        }
    }
    backtrack(0);
    return ans;
};
// TC O(k^n)
// SC O(k)
