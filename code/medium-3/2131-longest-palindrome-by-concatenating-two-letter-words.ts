function longestPalindrome(words: string[]): number {
    const obj = {};
    let counter = 0;
    
    for(let word of words) {
        const reversedWord = reverse(word);
        if(obj[word]) {
            obj[word]--;
            counter += 4;
        } else {
            obj[reversedWord] = obj[reversedWord] + 1 || 1;
        } 
    }
    
    const hashGotMorePalindromes = Object.keys(obj).filter(str => obj[str] && reverse(str) === str);
    
    if(hashGotMorePalindromes.length) counter += 2;
    
    return counter;
};

// We define a reverse function to reverse our string.
const reverse = str => str.split('').reverse().join('');

// TC O(n^2)
// SC O(n)
