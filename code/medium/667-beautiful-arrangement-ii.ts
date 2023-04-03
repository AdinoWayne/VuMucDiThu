function constructArray(n: number, k: number): number[] {
    let a = Array.from(Array(n).keys()).map( a => a + 1);
    if(k ===1) return a;

    const len = a.length;

    for(let i=2;i<= k;i++) {
        let x = a.slice( len - i + 1 ,len);
        let y = a.slice(0, len - i + 1);
        a = [...y.reverse(),...x];
    }
    return a;
};
//  time complexity is O(nk)
//  space complexity is O(nk)
