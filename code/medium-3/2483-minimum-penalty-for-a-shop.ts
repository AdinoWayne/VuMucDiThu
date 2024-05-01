function bestClosingTime(customers: string): number {
    let tmp = 0, cus = 0, horur = -1;
    for (let i = 0; i < customers.length; ++i) {
        cus += (customers[i] === 'Y') ? 1 : -1;
        if (cus > tmp) {
            tmp = cus;
            horur = i;
        }
    }
    return horur + 1;
};
// Time Complexity: O(n)
// Space Complexity: O(1)
