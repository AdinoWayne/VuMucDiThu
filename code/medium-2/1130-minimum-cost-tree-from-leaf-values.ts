function mctFromLeafValues(arr: number[]): number {
    const memo = [... new Array(arr.length)].map(() => new Array(arr.length).fill(0))
    
    return calcMctFromLeafValues(arr, 0, arr.length-1);
    
    function calcMctFromLeafValues(arr, l, r){
        if (memo[l][r] !== 0) {
            return memo[l][r];
        }
        // leaf node, don't add to sum        
        if (l===r) {
            return 0;
        }
        
        // init minSum to be Infinity so that it can be easily overwritten later
        let minSum = Infinity;

        // p stands for partition, cuts after p, so p needs to be smaller than r
        // e.g. in the array [0, 1] and l = 0, r = 1
        // p can only be 0, that means cuts in between
        for (let p = l; p < r; p++) {
            
            const leftMaxLeaf = Math.max(...arr.slice(l, p + 1));
            const rightMaxLeaf = Math.max(...arr.slice(p + 1, r + 1));

            let leftSubtreeSum = calcMctFromLeafValues(arr, l, p);
            let rightSubtreeSum = calcMctFromLeafValues(arr, p+1, r);
            
            //tally the final result
            minSum = Math.min(minSum, leftMaxLeaf*rightMaxLeaf + leftSubtreeSum + rightSubtreeSum);
        }
        memo[l][r] = minSum;
        return minSum;
    }
};
