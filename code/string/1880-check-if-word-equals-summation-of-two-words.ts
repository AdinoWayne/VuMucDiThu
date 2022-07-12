function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
    return calculateSum(firstWord) + calculateSum(secondWord) === calculateSum(targetWord)
};

function calculateSum(word) {
    const num = word.split('').reduce((a, c) =>`${a}${c.charCodeAt(0) - 97}`, []);

    return parseInt(num, 10)
}
