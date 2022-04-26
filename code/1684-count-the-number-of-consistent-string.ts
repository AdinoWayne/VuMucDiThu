function countConsistentStrings(allowed: string, words: string[]): number {
        let not_match=0
        for (let word of words) {
            for (let w of word) {
                if(allowed.indexOf(w) == -1) {
                    not_match +=1;
                    break;
                }
            }

        }
        let ans = words.length - not_match;
        return ans
};
