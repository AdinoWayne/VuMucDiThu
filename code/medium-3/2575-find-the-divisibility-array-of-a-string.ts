function divisibilityArray(word: string, m: number): number[] {
    const ans = [];
    let num = 0, carry = 0;
    
    for (let i = 0; i < word.length; i++) {
        num = Number(carry + word[i]);
        carry = num % m;
        ans.push(carry ? 0 : 1);
    }
    
    return ans;
};
// TC O(n)
// SC O(n)
