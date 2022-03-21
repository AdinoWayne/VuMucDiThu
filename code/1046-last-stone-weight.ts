function lastStoneWeight(stones: number[]): number {
    while(stones.length > 1) {
        let s1 = Math.max(...stones);
        stones.splice(stones.indexOf(s1), 1);
        let s2 = Math.max(...stones);
        stones.splice(stones.indexOf(s2), 1);
        if(s1 != s2) {
            stones.push(s1-s2);
        }
    }
    return (stones.length > 0) ? stones[0] : 0;
};
