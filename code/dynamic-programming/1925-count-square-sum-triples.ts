function countTriples(n: number): number {
    let mySet = new Set();
    let i = 1;
    let count = 0;
    while (i <= n) {
        mySet.add(i * i);
        i++;
    }
    for (let k = 1; k <= n; k++) {
        for (let j = 1; j <= n; j++) {
            if (mySet.has(Math.pow(k, 2) + Math.pow(j, 2))) {
                count++;
            }
        }
    }
    return count;
};
