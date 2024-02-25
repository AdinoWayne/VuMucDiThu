function waysToBuyPensPencils(total: number, cost1: number, cost2: number): number {
    let res = 0;
    let i = 0
    while (cost1 * i <= total){
        res += 1 +  Math.trunc((total - cost1 * i) / cost2)
        i++
    }  
    return res
};
// TC O(n)
// SC O(1)
