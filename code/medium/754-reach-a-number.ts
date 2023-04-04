function reachNumber(target: number): number {
    target = Math.abs(target);
    let steps = 0, sum = 0;
    while (sum < target) {
        steps++;
        sum += steps;
    }
    while ((sum - target) % 2 !== 0) {
        steps++;
        sum += steps;
    }
    return steps;
};
