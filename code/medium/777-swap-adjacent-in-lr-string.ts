function canTransform(start: string, end: string): boolean {
    let i = 0;
    let j = 0;
    
    while (i < start.length || j < end.length) {
        if (start[i] === 'X') {
            i++;
            continue;
        }
        
        if (end[j] === 'X') {
            j++;
            continue;
        }
        
		// Breaking (1)
        if (start[i] !== end[j]) return false;
        
		// Breaking (2)
        if (start[i] === 'R' && i > j) return false;
		
		// Breaking (3)
        if (start[i] === 'L' && j > i) return false;
        
        i++;
        j++;
    }
    
    return true;
};

// Time complexity: O(n)
// Space complexity: O(1)
