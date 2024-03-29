function invalidTransactions(transactions: string[]): string[] {
    const n = transactions.length;
    const added = new Array(n).fill(false);
    const res = [];

    for (let i = 0; i < n; i++) {
        const [name1, time1, amount1, city1] = transactions[i].split(",");
        
        if (parseInt(amount1, 10) > 1000 && !added[i]) {
            res.push(transactions[i]);
            added[i] = true;
        }
        
        for (let j = i + 1; j < n; j++) {
            const [name2, time2, amount2, city2] = transactions[j].split(",");
            
            if (name1 === name2 && Math.abs(parseInt(time1, 10) - parseInt(time2, 10)) <= 60 && city1 != city2) {
                if (!added[j]) {
                   res.push(transactions[j]);
                    added[j] = true;
                }
                
                if (!added[i]) {
                    res.push(transactions[i]);
                    added[i] = true;
                }
            }
        }
        
    }
    
    return res;
};
// TC O(n2)
// SC O(n)
