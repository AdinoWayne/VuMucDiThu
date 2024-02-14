function minMoves(target: number, maxDoubles: number): number {
    if (maxDoubles === 0) return target - 1;
    let count = 0;
    while (target > 1) {
        if (target % 2 === 0 && maxDoubles > 0) {
            target /= 2;
            maxDoubles--;
        } else {
            target--;
        }
        count++;
    }
    return count;
};
// Time complexity: O(log₂(target))
// Space complexity: O(1)
