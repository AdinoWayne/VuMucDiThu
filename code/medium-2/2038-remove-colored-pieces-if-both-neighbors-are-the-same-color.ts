function winnerOfGame(colors: string): boolean {
    let aliceMoves = 0;
    let aCount = 0;
    for (let i = 0; i < colors.length; i ++) {
        if (colors[i] === 'A') {
            aCount ++;
        }
        if (colors[i] === 'B' || i === colors.length  - 1) {
            if (aCount >= 3) {
                aliceMoves += (aCount - 2);
            }
            aCount = 0;
        }
    }
    let bobMoves = 0;
    let bCount = 0;
    for (let i = 0; i < colors.length; i ++) {
        if (colors[i] === 'B') {
            bCount ++;
        }
        if (colors[i] === 'A' || i === colors.length  - 1) {
            if (bCount >= 3) {
                bobMoves += (bCount - 2);
            }
            bCount = 0;
        }
    }
    return aliceMoves > bobMoves;
};
// TC O(n)
// SC O(1)
