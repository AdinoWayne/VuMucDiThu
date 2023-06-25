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

// Could we find a pair for each number in the array, so one element of the pair is twice bigger than other?

// Presuming we have this array. [2, 4, 1, 8].
// We can pair 2 with 4. And find no pair for 1, cause the array is unsorted!
// So first of all, we should sort the array.

// TC O(nlogn)
// SC O(n)
