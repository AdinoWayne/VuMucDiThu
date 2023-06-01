function findAndReplacePattern(words: string[], pattern: string): string[] {
    let matches = []
    for(const word of words){
        if(word.length !== pattern.length)continue
        let map = new Map(), set = new Set(), equals = true
        for(let i = 0; i < pattern.length; i++){
            if(map.has(pattern[i])){
                if(map.get(pattern[i]) !== word[i]){
                    equals = false
                    break                    
                }
            }else{
                if(set.has(word[i])){
                    equals = false
                    break
                }
                map.set(pattern[i], word[i])
                set.add(word[i])
            }
        }
        if(equals)matches.push(word)
    }
    return matches
};

// Time complexity: O(n2)
// Space complexity: O(n)
