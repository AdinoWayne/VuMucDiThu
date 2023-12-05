function minAbsoluteSumDiff(nums1: number[], nums2: number[]): number {
    let sum = 0;
    const dists = [];

    for (let i = 0; i < nums1.length; i++) {
        const dist = Math.abs(nums1[i] - nums2[i]);
        dists.push(dist);
        sum += dist;
    }
    nums1 = nums1.sort((a, b) => a - b);
    let ans = sum;
    for (let i = 0; i < nums1.length; i++) {
        let left = 0;
        let right = nums1.length - 1;
        const oldDist = dists[i];
        let newDist = oldDist;
        while (left <= right) {
            const j = Math.floor((left + right) / 2);
            const diff = nums1[j] - nums2[i];
            const dist = Math.abs(diff);
            if (dist < newDist) {
                newDist = dist;
                
                if (newDist === 0) {
                    break;
                }
            }
            if (diff < 0) {
                left = j + 1;
            } else {
                right = j - 1;
            }
        }
        ans = Math.min(ans, (sum - oldDist) + newDist);
    }
    return ans % (1e9 + 7);
};
// TC O(nLogn)
// SC O(n)
