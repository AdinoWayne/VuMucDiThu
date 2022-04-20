function sumOddLengthSubarrays(arr: number[]): number {
    let n = arr.length;

    let to = 0;    // total

    let pr = [];   // prefix sum array
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            pr[i] = arr[i];
        } else {
            pr[i] = pr[i - 1] + arr[i];
        }
    }

    let st;    // start
    let en;    // end
    for (st = 0; st < n; st++) {
        for (en = st; en < n; en += 2) {
            to += pr[en] - (pr[st - 1] || 0);    // odd-length subarry sum
        }
    }

    return to;
};
