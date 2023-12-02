function minStoneSum(piles: number[], k: number): number {
    let c = Array(10001).fill(0), s = 0
    piles.forEach( i => c[i]++ )
    for ( let i = c.length-1; i > 0; i-- )
        while ( c[i]-- > 0 )
            k-- > 0 ? c[Math.ceil(i/2)]++ : s += i
    return s
};
