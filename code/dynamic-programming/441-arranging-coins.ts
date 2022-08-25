function arrangeCoins(n: number): number {
    let guess = Math.round(Math.sqrt(2*n));
    let used_coins = guess * (guess + 1) / 2;
    while (used_coins <= n){
        guess++;
        used_coins = guess * (guess + 1) // 2;
    };
    return (guess > 0) ? guess-1 : 0
};
