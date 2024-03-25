function smallestNumber(pattern: string): string {
    const ans = [];
    let stack = [];
    for (let i = 0; i <= pattern.length; i++) {
        stack.push(i + 1);
        if (pattern[i] === 'I' || i === pattern.length) {
            ans.push(...stack.reverse());
            stack = [];
        }
    }
    return ans.join('');
};
// TC O(n)
// SC O(n)
