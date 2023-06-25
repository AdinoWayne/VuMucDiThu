function canReorderDoubled(arr: number[]): boolean {
    arr.sort((a, b) => a - b);
    let counter = new Map();
    for (let num of arr) {
        if(!counter.has(num)) {
            counter.set(num, 0);
        }
        counter.set(num, counter.get(num) + 1);
    }
    for (let num of arr) {
        if (!counter.has(num)) {
            continue;
        }
        let pair = num >= 0 ? num * 2 : num / 2;
        if(!counter.has(pair)) {
            return false;
        }
        for (let k of [num, pair]) {
            counter.set(k, counter.get(k) - 1);
            if (counter.get(k) === 0) {
                counter.delete(k);
            }
        }
    }
    return true;
};

// TC O(nlogn)
// SC O(n)
