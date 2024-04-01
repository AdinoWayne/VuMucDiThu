function isStrictlyPalindromic(n: number): boolean {
    let i=2;
    while(i<n-1){
        let temp = n.toString(i);
        if(temp !== temp.split('').reverse().join('')) return false;
        i++;
    }
    return true;
};
// TC O(n2)
// SC O(n)
