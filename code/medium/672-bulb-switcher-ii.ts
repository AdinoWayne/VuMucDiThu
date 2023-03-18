function flipLights(n: number, presses: number): number {
    if (presses === 0) return 1;
    if (presses === 1) return n <= 2 ? n + 1 : 4;
    if (n <= 2) return 2 * n;
    return 7 + (presses >= 3 ? 1 : 0);
};
