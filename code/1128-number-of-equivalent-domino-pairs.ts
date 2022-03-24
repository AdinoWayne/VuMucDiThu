function numEquivDominoPairs(dominoes: number[][]): number {
        let num = []
        let ret = 0;
        dominoes.forEach(domino => {
            const val = domino[0] < domino[1] ? domino[0] * 10 + domino[1] : domino[1] * 10 + domino[0];
            ret += (num[val] || 0);
            num[val] = (num[val] || 0) + 1;
        });
        return ret;
};
