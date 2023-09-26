function maxScore(cardPoints: number[], k: number): number {
    // Edge cases
    if (k === cardPoints.length) {
        return cardPoints.reduce((acc, curr) => acc+curr, 0)
    }
    if (k === 0) return 0
    
    let right = 0
    let left = k - 1
    const length = cardPoints.length - 1
    let currentSum = cardPoints.slice(0, k).reduce((acc, curr) => acc + curr, 0)
    let maxSum = currentSum

    while (left >= 0) {
        currentSum -= cardPoints[left]
        left -= 1
        currentSum += cardPoints[length - right]
        right += 1
        
        if (currentSum > maxSum) {
            maxSum = currentSum
        }
    }
    
    return maxSum
};
// TC O(n)
// SC O(1)
