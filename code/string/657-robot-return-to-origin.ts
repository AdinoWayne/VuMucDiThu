function judgeCircle(moves: string): boolean {
    const movesMap = {
        L: -1,
        R: 1,
        U: 1,
        D: -1
    };
 
    let x = 0;
    let y = 0;
 
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === "L" || moves[i] === "R") {
            x = x + movesMap[moves[i]];
        }
 
        if (moves[i] === "U" || moves[i] === "D") {
            y = y + movesMap[moves[i]];
        }
    }
 
    return (x === 0 && y === 0);
};
