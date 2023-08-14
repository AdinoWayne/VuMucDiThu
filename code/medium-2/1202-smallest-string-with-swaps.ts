function smallestStringWithSwaps(s: string, pairs: number[][]): string {
    const DS = [...Array(s.length)].map((_, i) => i);
    const group = new Map()
    const charMap = new Map();
    const result = [];
    
    function find(id) { 
        if(id === DS[id]) return id;
        DS[id] = find(DS[id]);
        return DS[id];
    }
    
    for(let [u, v] of pairs) {
        const rootU = find(u);
        const rootV = find(v);
        DS[rootV] = rootU
    }
    
    for(let i = 0; i < s.length; i++) {
        find(i)
        if(!charMap.has(s[i])) charMap.set(s[i], []);
        if(!group.has(DS[i])) group.set(DS[i], []);
        charMap.get(s[i]).push(i);
        group.get(DS[i]).push(i);
    }
    
    const charSorted = [...charMap.entries()].sort(([a], [b]) => a.charCodeAt() - b.charCodeAt());
    
    for(let [char, idxs] of charSorted) {
        for(let i of idxs) {
            const newIdx = group.get(DS[i]).shift();
            result[newIdx] = char;
        }
    }
    return result.join('')
};
// group = map<IdxPairs, elPairs[]> , charMap = map<s[i], [i]>
// TC O(nLogn)
// SC O(n)
