function longestStrChain(words: string[]): number {
    let memory = {}, resultCount = 0, localLongest = 0, prevString = "";
    
    words.sort((a,b) => a.length - b.length);
    
    for (var word of words){
        for (var i =0; i<word.length; i++){
            //remove the current ith char from the string
            prevString = word.slice(0,i) + word.slice(i+1);
            // search that string in memory and store the max in localLongest
            localLongest = Math.max(localLongest, (memory[prevString] || 0)+1)
        }
        // holds the current longest chain count;
        resultCount = Math.max(localLongest, resultCount);
        memory[word] = localLongest
        localLongest = 0;
    }
    return resultCount;
};
// TC O(n2)
// SC O(n)
