function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
    let [s, e] = [0, 1];
    while (s < e) {
        let m = (s + e) / 2;
        let cnt = 0;
        let best = Infinity;
        let [ii, jj] = [0, 0];
        for (let i = 0; i < arr.length - 1; i++) {
            let [ss, ee] = [i + 1, arr.length - 1];
            while (ss <= ee) {
                let mm = Math.floor((ss + ee) / 2);
                let v = arr[i] / arr[mm];
                if (v > m) {
                    ss = mm + 1;
                } else {
                    ee = mm - 1;
                }   
            }
            let dif = arr.length - ss;
            if (dif > 0) {
                cnt += dif;
                let val = m - arr[i] / arr[ss];
                if (val < best) {
                    [ii, jj] = [i, ss];
                    best = val;
                }
            }
        }
        if (cnt == k) {
            return [arr[ii], arr[jj]];
        } else if (cnt < k) {
            s = m;
        } else {
            e = m;
        }
    }
};
