function matchPlayersAndTrainers(players: number[], trainers: number[]): number {
    players.sort((a, b) => a - b);
    trainers.sort((a, b) => a - b);
    
    let i = 0;
    for (let j = 0; j < trainers.length; j++) {
        if (players[i] <= trainers[j]) {
            i++;
        }
    }
    
    return i;
};
// TC O(n * log n)
// SC O(n)
