function wordSubsets(words1: string[], words2: string[]): string[] {
    const output = [];
    const freqB = Array(26).fill(0); // mapB
    
    for(let wordB of words2) {
        const currFreq = getFreq(wordB);
        
        for(let i = 0; i < freqB.length; i++) {
            freqB[i] = Math.max(freqB[i], currFreq[i]);
        }
    }
    
    for(let wordA of words1) {
        const freqA = getFreq(wordA); // mapA
        const universal = isSubset(freqA);
        if(universal) output.push(wordA);
    }
    
    function isSubset(freqA: number[]): boolean { // compare is sub
        for(let i = 0; i < freqA.length; i++) {
            if(freqB[i] > freqA[i]) return false;
        }
        return true;
    }
    
    function getFreq(word: string): number[] {
        const map = Array(26).fill(0);
        for(let char of word) {
            const idx = char.charCodeAt() - 97;
            map[idx]++;
        }
        return map;
    }
    return output;
};

// Time complexity: O(n2)
// Space complexity: O(1)
