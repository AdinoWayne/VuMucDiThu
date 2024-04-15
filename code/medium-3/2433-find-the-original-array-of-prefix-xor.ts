function findArray(pref: number[]): number[] {
    let xor = pref[0];
    for(let i=1; i<pref.length; i++){
        pref[i] ^= xor;
        xor ^= pref[i];
    }
    return pref;
};
// The function performs n-1 constant-time operations in the loop, resulting in a total time complexity of O(n).
// It doesn't create any new data structures, leading to a space complexity of O(1).
