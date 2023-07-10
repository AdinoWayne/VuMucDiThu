function isValid(S: string): boolean {
    while(S.indexOf('abc')>=0) {
        S=S.split('abc').join('');
    }
    return S.length === 0;
};
// Since the split and join methods have a time complexity of O(n), the overall time complexity of the function is O(n^2).
// The space complexity is O(n) because the input string S is stored in memory
