function isCovered(ranges: number[][], left: number, right: number): boolean {
        let set = new Set();
        for (let range of ranges) {
            let start = Math.max(range[0], left);
            let end = Math.min(range[1], right);
            for (let i = start; i <= end; i++)
                set.add(i);
        }
        return set.size == right - left + 1;
};
