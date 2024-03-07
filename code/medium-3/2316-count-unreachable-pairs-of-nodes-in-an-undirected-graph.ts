function countPairs(n: number, edges: number[][]): number {
    const arr = new Array(n).fill(-1);
    const find = (a) => {
        return(arr[a] < 0) ? a : find(arr[a]);
    };
    const union = (a, b) => {
        const pa = find(a), pb = find(b);
        if(pa === pb) return;
        if(arr[pa] <= arr[pb]) {
            arr[pa] += arr[pb];
            arr[pb] = pa;
        } else {
            arr[pb] += arr[pa];
            arr[pa] = pb;   
        }
    }
    for(const [a,b] of edges) {
        union(a,b);
    }
    let totalCount = 0, ans = 0;
    for(const connected of arr) {
        if(connected > -1) continue;
        const countConnected = -1 * connected;
        ans += totalCount  *  countConnected ;
        totalCount += countConnected;
    }
    return ans;
};
// Time Complexity: O(e + n * α(n)) ≅ O(e + n) (in most cases)
// Space Complexity: O(n)
