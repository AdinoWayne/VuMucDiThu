function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
    let ans: Set<number> = new Set();
    let set2: Set<number> = new Set();
    let set1: Set<number> = new Set();

    for (let n of nums1) {
        set1.add(n);
    }
    for (let n of nums2) {
        set2.add(n);
        if (set1.has(n)) {
            ans.add(n);
        }
    }
    for (let n of nums3) {
        if (set1.has(n) || set2.has(n)) {
            ans.add(n);
        }
    }
    return [...ans];
};
