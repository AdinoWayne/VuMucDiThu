function minPartitions(n: string): number {
    let ans = 0

    for (let i = 0; i < n.length; i++) {
        ans = Math.max(ans, +n[i])
    }

    return ans
};
// TC O(n)
// SC O(1)
