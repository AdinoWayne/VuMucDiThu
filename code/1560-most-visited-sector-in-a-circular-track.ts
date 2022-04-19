function mostVisited(n: number, rounds: number[]): number[] {
        let len = rounds.length, fr = rounds[0], to = rounds[len - 1];
        let res = [];
        if (to >= fr) {
            for (let i = fr; i <= to; i++) res.push(i);
        } else {
            for (let i = 1; i <= n; i++) {
                if (i == to + 1) i = fr;
                res.push(i);
            }
        }
        return res;
};
