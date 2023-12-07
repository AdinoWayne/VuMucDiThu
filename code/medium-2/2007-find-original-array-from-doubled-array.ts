function findOriginalArray(changed: number[]): number[] {
    if (changed.length % 2) return []
        
    let s = new Map()
    let res = []
    
    let copy = changed.map(el => el)
    
    copy.sort((a, b) => a-b)
    
    for (let v of copy) {
        const d = v / 2
        
        if (s.has(d)) {
            res.push(d)
            
            let newRes = s.get(d) - 1
            if (newRes > 0) {
                s.set(d, newRes)
            } else {
                s.delete(d)
            }
            
        } else {
            s.set(v, s.has(v) ? s.get(v) + 1  : 1)
        }
    }
    
    return s.size === 0 ? res : []
};
