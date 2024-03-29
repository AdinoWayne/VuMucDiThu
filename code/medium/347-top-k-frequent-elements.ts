function topKFrequent(nums: number[], k: number): number[] {
    const freqMap = new Map();
    const bucket = [];
    const result = [];
    
    for(let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    for(let [num, freq] of freqMap) {
        bucket[freq] = (bucket[freq] || new Set()).add(num);
    }
    
    for(let i = bucket.length-1; i >= 0; i--) {
        if(bucket[i]) result.push(...bucket[i]); // note length bucket[i] + result < k
        if(result.length === k) break;
    }
    return result;
};
// Time complexity is O(n) + O(n) + O(k) = O(n+k)
// Space complexity is O(n+k).
