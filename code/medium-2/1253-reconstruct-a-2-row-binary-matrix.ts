function reconstructMatrix(upper: number, lower: number, colsum: number[]): number[][] {
    const result = [[], []];

    for (let index = 0; index < colsum.length; index++) {
        const sum = colsum[index];
        if (sum === 0) {
           result[0][index] = result[1][index] = 0;
           continue; 
        }

        if (sum === 2) {
            result[0][index] = result[1][index] = 1;
            upper -= 1;
            lower -= 1;
        } else if (upper > lower) {
            result[0][index] = 1;
            result[1][index] = 0;
            upper -= 1;
        } else {
            result[0][index] = 0;
            result[1][index] = 1;
            lower -= 1;
        }
        if (upper < 0 || lower < 0) return [];
    }
    return upper > 0 || lower > 0 ? [] : result;
};
