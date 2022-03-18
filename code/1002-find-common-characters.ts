function commonChars(words: string[]): string[] {
    let res = [], word = words[0];
    for (let s of word) {
        if (words.every(item => item.includes(s))) {
            words = words.map(item => item.replace(s, ''))
            res.push(s)
        }
    }
    return res;
};
