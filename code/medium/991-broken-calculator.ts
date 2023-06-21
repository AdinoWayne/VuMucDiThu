function brokenCalc(startValue: number, target: number): number {
    let count = 0;

    // go down
    while (target > startValue) {
        if (target % 2 === 0) target /= 2;
        else target += 1;
        count++;
    }

    // go up
    count += startValue - target;

    return count;
};
