class TopVotedCandidate {
    winningTimes: { [key: number]: number };
    times: number[];
    constructor(persons: number[], times: number[]) {
        this.winningTimes = {};
        this.times = times;
        var votesCount = [];
        
        var currentWinningPerson = -1;
        var winningVotes = 0;
        for (var i = 0; i < persons.length; i++) {
            if (!votesCount[persons[i]]) {
            votesCount[persons[i]] = 0;
            };
            votesCount[persons[i]]++;
            
            if (votesCount[persons[i]] >= winningVotes) {
            winningVotes = votesCount[persons[i]];
            currentWinningPerson = persons[i];
            }
            this.winningTimes[times[i]] = currentWinningPerson;
        }
    }

    q(t: number): number {
        var p = 0;
        while (this.times[p] < t) {
            p++;
        }
        
        if (this.times[p] === t) {
            return this.winningTimes[this.times[p]];
        }
        return this.winningTimes[this.times[p-1]];
    }
}

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */
