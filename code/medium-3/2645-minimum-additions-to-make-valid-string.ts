function addMinimum(word: string): number {
    var i = 0;
    var result = 0;
    var abc = 'abc';
    while (i < word.length) {
        for(var j = 0; j < abc.length; j++) {
            if (word[i] !== abc[j]) {
                result++;
            } else {
                i++;
            }
        }
    }
    return result;
};
// time complexity is O(n)
// space complexity is O(1)
