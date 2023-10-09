function canArrange(arr: number[], k: number): boolean {
    const n = arr.length;
    const map = new Map();
    
    for (let i = 0; i < n; i++) {
        const num = arr[i];
        let rem = num % k;
        
        if (rem < 0) rem += k;
        
        if (!map.has(rem)) map.set(rem, 0);
        map.set(rem, map.get(rem) + 1);
    }
    
    for (const [rem, count] of map) {
        if (rem === 0) {
            if (count % 2 != 0) {
                return false;
            }
            map.delete(0);
        }
        else {
            const counterPart = k - rem;
            
            if (!map.has(counterPart)) return false;
            
            const otherCount = map.get(counterPart);
            
            if (count != otherCount) return false;
            
            map.delete(rem);
            map.delete(counterPart);
        }
    }
   
    return map.size === 0;
};
// TC O(n)
// SC O(n)
