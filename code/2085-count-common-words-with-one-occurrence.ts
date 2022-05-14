function countWords(words1: string[], words2: string[]): number {
    let count = {}

    for (const word of words1) {
        if (count[word] == undefined) {
            count[word] = 1;
        } else {
            ++count[word];
        }
    }
    for (const word of words2) {
        if (count[word] !== undefined && count[word] < 2) {
            --count[word];
        }
    }
    return Object.values(count).filter(el => el == 0).length
};
