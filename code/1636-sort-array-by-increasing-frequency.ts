function frequencySort(nums: number[]): number[] {
        let freq = {}
        for(let n of nums) {
            if (freq[n] == undefined) {
                freq[n] = 1;
            } else {
                freq[n] += 1
            }
        }
        const res = nums.sort((a, b) => {
            if (freq[a] != freq[b])
                return freq[a] < freq[b] ? -1 : freq[a] === freq[b] ? 0 : 1;
            return a > b ? -1 : a === b ? 0 : 1;
        })
        return res
};
