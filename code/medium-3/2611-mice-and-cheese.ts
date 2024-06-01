function miceAndCheese(reward1: number[], reward2: number[], k: number): number {
    let n = reward1.length, rewards = [];
    for (let i = 0; i < n; i++) {
        rewards.push([reward1[i], reward2[i], reward1[i] - reward2[i]]);
    }
    rewards.sort((a, b) => b[2] - a[2]);
    let score = 0;
    for (let i = 0; i < n; i++) {
        score += i < k ? rewards[i][0] : rewards[i][1];
    }
    return score;
};
// Time complexity: O(n log n)
// Space complexity: O(n)
