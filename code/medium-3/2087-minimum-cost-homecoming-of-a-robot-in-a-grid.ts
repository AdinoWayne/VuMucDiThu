function minCost(startPos: number[], homePos: number[], rowCosts: number[], colCosts: number[]): number {
    let totCosts = 0;
    let rowDir = startPos[0] <= homePos[0] ? 1 : -1;
    let colDir = startPos[1] <= homePos[1] ? 1 : -1;
    let row = startPos[0];
    while (row != homePos[0]) {
        row += rowDir;
        totCosts += rowCosts[row];
    }
    let col = startPos[1];
    while (col != homePos[1]) {
        col += colDir;
        totCosts += colCosts[col];
    }
    return totCosts;
};
// TC O(max(abs(startPos[0] - homePos[0]), abs(startPos[1] - homePos[1])))
// SC O(1)
