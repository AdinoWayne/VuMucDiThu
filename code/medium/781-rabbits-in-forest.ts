function numRabbits(answers: number[]): number {
    const map = new Map();
    let tot = 0;
    
    for (const answer of answers) {
        if (answer === 0) {
            tot++;
            continue;
        }
        
        if (!map.has(answer)) {
            map.set(answer, answer);
            tot += answer + 1;
        } else {
            map.set(answer, map.get(answer) - 1);
            
            if (map.get(answer) === 0) map.delete(answer);
        }
    }
    return tot;
};

// Time complexity:  O(n)
// Space complexity: O(n)
