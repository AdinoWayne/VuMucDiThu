function nthPersonGetsNthSeat(n: number): number {
   return n === 1 ? 1.0 : 0.5
};
// Math: f(n) = 1/n + 1/n * ( f(n-1) + f(n-2) + f(n-3) + ... + f(2) )
