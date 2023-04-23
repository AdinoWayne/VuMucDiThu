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

// Eg:
// target = 5
// Step 0: target = 5.
// Step 1: sum = 1 + 2 + 3 = 6 > 5, step = 3.
// Step 2: Difference = 6 - 5 = 1. Since the difference is an odd value, we will not reach the target by switching any right move to the left. So we increase our step.
// Step 2.2: We need to increase step by 2 to get an even difference (i.e. 1 + 2 + 3 + 4 + 5 = 15, now step = 5, difference = 15 - 5 = 10).
// Now that we have an even difference, we can simply switch any move to the left (i.e. change + to -) as long as the summation
// of the changed value equals to half of the difference
// We can do 1 - 2 - 3 + 4 + 5 = 5 to reach target
