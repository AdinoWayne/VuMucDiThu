function circularPermutation(n: number, start: number): number[] {
    let a = grayCodeStartingWith(n, start);
    return a;
};

var grayCodeStartingWith = function (n, start) {
    let a = [];
    for (let i = 0; i < 2 ** n; i++) {
        a.push(i ^ (i / 2) ^ start);
        //same: a.push(i ^ (i >> 1) ^ start);
    }
    return a;
};
// TC O(2^n)
// SC O(2^n)
