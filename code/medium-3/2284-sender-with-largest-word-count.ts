function largestWordCount(messages: string[], senders: string[]): string {
    let wordCount = {}
    let result = ''
    let maxCount = -Infinity
    for (let i = 0; i < messages.length;i++) {
        let count=messages[i].split(' ').length
        wordCount[senders[i]] = wordCount[senders[i]] == undefined ? count : wordCount[senders[i]] + count;
        if (wordCount[senders[i]]  > maxCount || (wordCount[senders[i]]  == maxCount && senders[i] > result)) {
            maxCount = wordCount[senders[i]];
            result = senders[i];
        }
    }
    return result;
};
// TC O(n * k)
// SC O(1)
