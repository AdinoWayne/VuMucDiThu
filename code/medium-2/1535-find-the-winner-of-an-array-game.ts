function getWinner(arr: number[], k: number): number {
    let i = 1, winner = arr[0], winCount = 0;
    while (i < arr.length && winCount < k) {
        if (winner < arr[i]) {
            winner = arr[i];
            winCount = 1;
        } else {
            winCount++;
        }
        i++;
    }
    
    return winner;
};
// TC O(n)
// SC O(1)
