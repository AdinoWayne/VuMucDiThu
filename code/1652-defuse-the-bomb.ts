function decrypt(code: number[], k: number): number[] {
    const n = code.length
    if (k > 0) {
        return caseOne(code, k, n)
    }
    return caseTwo(code, k, n)
};

function caseOne(code: number[], k: number, n: number): number[] {
    let sumOfk = 0;
    for (let i = 0; i<k; i++) {
        sumOfk += code[i]
    }
    let res = [];
    for (let i = 0; i<n; i++) {
        sumOfk -= code[i];
        sumOfk += code[(i+k)%n];
        res.push(sumOfk);
    }
    return res;
}

function caseTwo (code: number[], k: number, n: number): number[] {
    return caseOne(code.reverse(),-k, n).reverse();
}
