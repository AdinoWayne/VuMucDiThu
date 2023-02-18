function change(amount: number, coins: number[]): number {
    const memo = new Map();
    
    return change(amount, coins.length - 1);
    
    function change(amount, index) {
        if (amount == 0) return 1;        
        if (amount < 0 || index < 0) return 0;
      
        const key = index + "#" + amount;
        if (memo.has(key)) return memo.get(key);
        
        const amountLeft = amount - coins[index];
        let res = 0;
        
        if (amountLeft >= 0) {
            res = change(amountLeft, index);
        } 
        
        res += change(amount, index - 1);
        memo.set(key, res);
        
        return res;
    }
};
