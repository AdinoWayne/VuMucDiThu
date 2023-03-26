function findLongestChain(pairs: number[][]): number {
    pairs.sort((a, b) => a[1] - b[1]);
    let prev = pairs[0], chain = 1;
    
    for(let i = 1; i < pairs.length; i++) {
        const [prevS, prevE] = prev;
        const [currS, currE] = pairs[i];
        if(prevE < currS) {
            prev = pairs[i];
            chain++;
        }
    }
    return chain;
};
// Time Complexity: O(n*log2n).

// Space Complexity: O(1) as no extra space has been used.

// Structure val
class val
{
    constructor(first,second){
        this.first = first;
        this.second = second;
    }
};
 
let m = new Map();
 
// Memoisation function
function findMaxChainLen(p,n,prev,pos)
{
     
    // Check if pair { pos, prev } exists
    // in m
    if (m.has(new val(pos, prev)))
        return m.get(new val(pos, prev));
 
    // Check if pos is >=n
    if (pos >= n)
        return 0;
 
    // Check if p[pos].first is
    // less than prev
    if (p[pos].first <= prev)
    {
        return findMaxChainLen(p, n, prev,
                                pos + 1);
    }
 
    else
    {
        let ans = Math.max(findMaxChainLen(p, n,
                            p[pos].second, 0) + 1,
                    findMaxChainLen(p, n,
                                prev, pos + 1));
        m.set(new val(pos, prev),ans);
        return ans;
    }
}
 
// Function to calculate maximum
// chain length
function maxChainLen(p,n)
{
    m.clear();
 
    // Call memoisation function
    let ans = findMaxChainLen(p, n, 0, 0);
    return ans;
}
