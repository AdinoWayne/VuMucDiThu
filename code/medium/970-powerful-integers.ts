function powerfulIntegers(x: number, y: number, bound: number): number[] {
    let ans = new Set<number>();
    const N = 20;
    for (let i = 0; i <= N; ++i) {
        for (let j = 0; j <= N; ++j) {
            let cand = (x ** i) + (y ** j);
            if (cand <= bound)
                ans.add(cand);
        }
    }
    return [...ans];
};

// TC O(n2)
// SC O(n2)
