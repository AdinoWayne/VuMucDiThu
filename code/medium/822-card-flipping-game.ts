function flipgame(fronts: number[], backs: number[]): number {
   var dictionary = new Set();
    let size = fronts.length;
    for(let i = 0; i < size; ++i) {
        if (fronts[i] == backs[i]) {
            dictionary.add(fronts[i]);
        }
    }
    let min_num = Number.MAX_VALUE;
    for(let num of fronts) {
        if (!dictionary.has(num)) min_num = Math.min(min_num, num);
    }
    for(let num of backs) {
        if (!dictionary.has(num)) min_num = Math.min(min_num, num);
    }
    return min_num == Number.MAX_VALUE ? 0 : min_num;
};

<!--
Time complexity: O(n)
Space complexity: O(n)
-->
