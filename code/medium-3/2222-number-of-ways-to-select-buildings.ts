function numberOfWays(s: string): number {
    let result = 0,
    zeroes = s.replaceAll('1', '').length,
    ones = s.length - zeroes,
    curZeroes = 0,
    curOnes = 0;
    for (let i = 0; i < s.length; i++) {
        s[i] === '0'
        ? (result += curOnes * (ones - curOnes))
        : (result += curZeroes * (zeroes - curZeroes));
        
        s[i] === '0' ? curZeroes++ : curOnes++;
    }
    return result;
};
// Time Complexity: O(n)
// Space Complexity: O(1)
