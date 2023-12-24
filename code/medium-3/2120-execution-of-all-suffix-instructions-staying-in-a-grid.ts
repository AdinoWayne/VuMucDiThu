function executeInstructions(n: number, startPos: number[], s: string): number[] {
    let answers = []; 
    for (let i = 0; i < s.length; i++) { 
        let movement = 0;
        let [row, col] = startPos;
        for (let j = i; j < s.length; j++) { 
            if (s[j] == "R") col++;
            else if (s[j] == "L") col--;
            else if (s[j] == "D") row++;
            else row--;
            if(row>n-1 || col > n-1 || row < 0 || col < 0) {
                break;
            }
            movement++;
        }
        answers[i] = movement;
    }
    return answers;
};
