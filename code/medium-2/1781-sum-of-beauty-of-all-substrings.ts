function beautySum(s: string): number {
    let map = new Map();
    let res = 0;
    for(let i = 0; i < s.length; i++) {
        map.set(s[i], 1);
        for(let j = i + 1; j < s.length; j++) {
            map.set(s[j], (map.get(s[j]) || 0) + 1);
            if(map.size >= 2) {
                res += mostFreq(map)
            }
        }
        map.clear();
    }
    return res
};

const mostFreq = (map) => {
    let min = Infinity;
    let max = -Infinity;
    for(const k of map.values()) {
        min = Math.min(min , k)
        max = Math.max(max, k)
    }
    return max - min
}
// TC O(n2)
// SC O(n)
