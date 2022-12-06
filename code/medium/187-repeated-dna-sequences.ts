function findRepeatedDnaSequences(s: string): string[] {
    let curr = s.slice(0, 10);
    const seen = new Set([curr]);
    const res: Set<string> = new Set();
    
    for(let i = 10; i < s.length; i++) {
        curr = curr.slice(1) + s[i];
        if(seen.has(curr)) res.add(curr);
        seen.add(curr);
    }
    return [...res];
};
