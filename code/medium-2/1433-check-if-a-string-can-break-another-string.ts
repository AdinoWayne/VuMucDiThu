function checkIfCanBreak(s1: string, s2: string): boolean {
    s1 = s1.split("").sort().join("");
    s2 = s2.split("").sort().join("");
    
    // check if s1 can break s2
    var breakable = true;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] < s2[i]) {
            breakable = false;
            break;
        }
    }
    if (breakable) return true;
    
    // check if s2 can break s1
    for (let i = 0; i < s1.length; i++)
        if (s1[i] > s2[i])
           return false
    
    return true;
};
// TC O(nlogn)
// SC O(n)
