function knightDialer(n: number): number {
    let dpp = Array(10).fill( 0 )
    let dpn = Array(10).fill( 1 )
    const mod = 10 ** 9 + 7
    const moves = {
        0: [ 4, 6 ],
        1: [ 6, 8 ],
        2: [ 7, 9 ],
        3: [ 4, 8 ],
        4: [ 0, 3, 9 ],
        5: [],
        6: [ 0, 1, 7 ],
        7: [ 2, 6 ],
        8: [ 1, 3 ],
        9: [ 2, 4 ],
    }
    for ( let count = 1; count < n; count++ ) {
        const hold = dpp
        dpp = dpn
        dpn = hold.fill(0) // set el -> 0
        for ( let digit = 0; digit <= 9; digit++ )
            moves[digit].forEach((move) => {
                dpn[digit] += dpp[move] % mod // new val =  oldVal[index]
            })
    }

    return dpn.reduce( ( a, x ) => a + x, 0 ) % mod
};

// TC O(n)
// SC O(1) because it uses a fixed-size array dpp and dpn

