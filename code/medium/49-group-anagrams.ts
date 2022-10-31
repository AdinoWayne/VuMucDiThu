function groupAnagrams(strs: string[]): string[][] {
    const map = {};
    
    for (const str of strs) {
        const sorted = str.split('').sort().join('');
        
        if (!map[sorted]) {
            map[sorted] = [str];
        } else {
            map[sorted].push(str);
        }
    }
    
    return Object.values(map);
};
