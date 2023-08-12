function reverseParentheses(s: string): string {
    while (s.includes("(")) { // Check if s has parentheses;
        s = s.replace(/\([^\(\)]+\)|\(\)/g, (match) => { 
		
			// If parentheses are detected, remove them and reverse all of the content inside 
            return match.slice(1, -1).split("").reverse().join("");
        })
    }
    
    return s;
};
// TC O(n2)
// SC O(n)
