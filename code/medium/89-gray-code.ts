function grayCode(n: number): number[] {
    if (n === 0) return [0];
    const res = grayCode(n - 1);
    const mask = 1 << n - 1;
    for (let i = res.length - 1; i >= 0; i--) {
        res.push(res[i] | mask);
    }
    return res;
};

// another solution 
// Time complexity : O(2^n).
// Space complexity : O(2^n).

function grayCode(n) {
    var res = [0];
    helper(n, res, 0);
    return res;
};

var helper = function (n, res, num) {
    if (num >= n) return;
    var len = res.length;
    for (var i = len - 1; i >= 0; i--) {
      res.push(res[i] + len);
    }
    helper(n, res, num + 1);
};
