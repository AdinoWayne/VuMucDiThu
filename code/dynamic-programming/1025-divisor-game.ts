function divisorGame(N: number): boolean {
    if (N === 0 || N === 1) return false;
    let move = 0;
    while (N > 1) {
        for (let i = 1; i < N; i++) {
            if (N % i === 0)  {
                N -= i; 
                move += 1;
                break;
            }
        }
    }
    return move % 2 === 1 ? true : false;
};
