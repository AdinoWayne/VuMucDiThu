// Using the formula 1 + 2 + 3 + ... + x = (1 + x) * x / 2.
// Finding the largest integer x such that (1 + x) * x / 2 is less than or equal to n.

// Formula Derivation

// (1 + x) * x / 2 ≤ n
// x^2 + x ≤ 2n
// 4x^2 + 4x ≤ 8n
// (2x + 1)(2x + 1) - 1 ≤ 8n
// x ≤ (√(8n + 1) - 1) / 2
// JavaScript Solution

// We take advantage of the above formula to do this, for example:

function arrangeCoins(n: number): number {
  return Math.floor((Math.sqrt(8 * n + 1) - 1) / 2);
};

function arrangeCoins(n: number): number {
    let guess = Math.round(Math.sqrt(2*n));
    let used_coins = guess * (guess + 1) / 2;
    while (used_coins <= n){
        guess++;
        used_coins = guess * (guess + 1) // 2;
    };
    return (guess > 0) ? guess-1 : 0
};
