function addToArrayForm(A: number[], K: number): number[] {
    let len = A.length
    if(len <= 5) {
        let res = 0
        for(let i = 0; i < len; i ++) {
            res += A[i] * Math.pow(10, len - 1 - i)
        }
        res += K
        let ans = [0]
        let i = 0
        while(res) {
            ans[i ++] = res % 10
            res = Math.floor(res / 10)
        }
        return ans.reverse()
    }else {
        let res = 0
        for(let i = len - 5, j = 0; i < len; i ++, j ++) {
            res += A[i] * Math.pow(10, 4 - j)
        }
        res += K
        let i = 0
        let ans = [0]
        while(res) {
            ans[i ++] = res % 10
            res = Math.floor(res / 10)
        }
        if(ans.length <= 5) {
            for(let i = 0; i < 5 - ans.length; i ++) {
                ans.push(0)
            }
            for(let i = len - 6, j = 0; i >= 0; i --, j ++) {
                ans[5 + j] = A[i]
            }
        }else {
            let yu = ans[5]
            let j = 0
            for(let i = len - 6; i >= 0; i --, j ++) {
                ans[5 + j] = (A[i] + yu) % 10
                yu = Math.floor((A[i] + yu) / 10)
            }
            if(yu) ans.push(yu)
        }
        return ans.reverse()
    }
};
