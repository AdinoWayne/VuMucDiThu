function minimizedMaximum(n: number, quantities: number[]): number {
    let high = Math.max(...quantities);
    let low = 0;
    while (low < high) {
        const mid = (low + high) >> 1;
        if (is_valid(mid, n, quantities)) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    return low;
};

var is_valid = function(mid, n, quantities) {
    let isValid = true;
    let store = 1;
    for (let quantity of quantities) {
        while (quantity > 0) {
            if (store > n) {
                return false;
            }
            quantity -= mid;
            store++;
        }
    }
    return true;
}
// TC O(n log(max))
// SC O(1)
