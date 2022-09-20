function totalMoney(n: number): number {
    let min = 1;
    let days:any = 7;
    let total = 0;
    let inc = 1;
    for (let i = 0; i < n; i++) {
        if (days !== 0) {
            total += min;
            min++;
            days--;
        } else {
            inc++;
            min = inc
            days = 7;
            i--;
        }
    }
    return total;
};
