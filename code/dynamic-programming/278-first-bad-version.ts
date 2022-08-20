/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let min = null;
        let start = 1;
        let end = n;
        
        while(start <= end) {
            const mid = Math.floor((start + end) / 2);
            
            if(isBadVersion(mid)) {
                min = mid;
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return min;
    };
};
