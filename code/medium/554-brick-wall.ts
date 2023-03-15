function leastBricks(wall: number[][]): number {
    const counts = {};
    let max = 0;
    for (let row of wall) {
        let sum = 0;
        for (let i = 0; i < row.length - 1; i++) {
            sum += row[i];
            counts[sum] = (counts[sum] || 0) + 1;
            max = Math.max(max, counts[sum]);
        }
    }
    return wall.length - max;
};

// Idea:
// If the goal here is to find where a line will cross the fewest bricks, then we could also say that the goal is to find where the most brick edges line up.
// We can consider the edges to occur at an index representing the current running total of the previous elements of a given row of the wall.
// For example, if the row is defined as [1,2,2,1], then the inside edges occur at [1,1+2,1+2+2], or [1,3,5].
