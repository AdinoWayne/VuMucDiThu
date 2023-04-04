function flipLights(n: number, presses: number): number {
    if (presses === 0) return 1;
    if (presses === 1) return n <= 2 ? n + 1 : 4;
    if (n <= 2) return 2 * n;
    return 7 + (presses >= 3 ? 1 : 0);
};

// 1 + 2 --> 3, 1 + 3 --> 2, 2 + 3 --> 1
// So, there are only 8 cases.

// All_on, 1, 2, 3, 4, 1+4, 2+4, 3+4

// And we can get all the cases, when n>2 and m>=3.
