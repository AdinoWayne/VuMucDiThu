function camelMatch(queries: string[], pattern: string): boolean[] {
    const patternLength = pattern.length;
        
    return queries.map((query) => {
        let match = 0;
        for (let x of query) {
            if (pattern[match] === x) {
                match++;
            } else if (x === x.toUpperCase()) {
                return false;
            }
        }

        return match === patternLength;
    });
};
