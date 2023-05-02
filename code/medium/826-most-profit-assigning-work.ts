function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
    const profitD = [];
    
    // create difficulty and profit array
    for (let i = 0; i < difficulty.length; i++) {
        profitD.push({d: difficulty[i], p: profit[i]});
    }
    
    // sort on difficulty
    profitD.sort((a, b) => a.d - b.d);
    // sort worker
    worker.sort((a, b) => a - b);
    
    
    // process to the array to get maxProfit So Far
    let maxSoFar = -Infinity;
    for (let i = 0; i < profitD.length; i++) {
        maxSoFar = Math.max(profitD[i].p, maxSoFar);
        profitD[i].p = maxSoFar;
    }
    
    
    let i = 0;
    let j = 0;
    let total = 0;
    while (i <= profitD.length && j < worker.length) {
        // use the last profit and assign it to all the remaining workers
        // can do this in another for loop
        if (i === profitD.length) {
            total += profitD[i - 1].p;
            j++;
            continue;
        }
          
        const {p, d} = profitD[i];
        // increment i if too difficult
        if (d <= worker[j]) {
            i++;
        } else {
            if (i - 1 >= 0) {
                total += profitD[i - 1].p;
            }
            j++;
        }
    }
    return total;
};
