function topKFrequent(words: string[], k: number): string[] {
    let hash = {};
    for (let word of words) {
        hash[word] = hash[word]+1||1;
    }
    let result = Object.keys(hash).sort((a,b)=>{
            let countCompare = hash[b] - hash[a];
            if (countCompare == 0) return a.localeCompare(b);
            else return countCompare;
        }   
    );
    return result.slice(0, k);
};
// Time complexity: O(n log n)
// Space complexity: O(n)
