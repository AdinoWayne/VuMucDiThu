function maximumRemovals(s: string, p: string, removable: number[]): number {
    const isSubWithRemoved = (removed) => {
        let pp = 0
        
        for (let i = 0; i < s.length; i++) {
            if (s[i] === p[pp] && !removed.has(i)) {
                pp++
            }
            
            if (pp === p.length) return true
        }
        return false
    }
    
    let l = 0
    let r = removable.length - 1
    let mid
    // standard binary search with checking if p is still substring
    while (l <= r) {
        mid = l + Math.floor((r-l)/2)
        
        let removed = new Set(removable.slice(0, mid+1))
        if (isSubWithRemoved(removed)) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return l
};
// TC O(nLogn)
// SC O(n)
