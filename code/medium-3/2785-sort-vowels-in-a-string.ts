function sortVowels(s: string): string {
    const vowelMap = {
        'A': 0, 'E': 0, 'I': 0, 'O': 0, 'U': 0,
        'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0
    }
    for (let char of s) {
        if (vowelMap[char] !== undefined) vowelMap[char]++ 
    }
    let sortedVowels = ''
    for (let vowel in vowelMap) {
        if (vowelMap[vowel]) {
            sortedVowels += vowel.repeat(vowelMap[vowel])
        }
    }
    let newStr = ''
    let i = 0
    for (let char of s) {
        if (vowelMap[char]) newStr += sortedVowels[i++]
        else newStr += char
    }
    return newStr
};
