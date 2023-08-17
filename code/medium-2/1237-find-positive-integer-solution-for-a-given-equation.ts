/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * class CustomFunction {
 *      f(x: number, y: number): number {}
 * }
 */

function findSolution(customfunction: CustomFunction, z: number): number[][] {
    const ret = [];
    for (let x = 1, y = 1000; x <= 1000 && y >= 1;) {
        const val = customfunction.f(x, y);
        val === z && ret.push([x, y]);
        val < z ? ++x : --y;
    }
    return ret;
};
// TC O(n)
// SC O(n)
