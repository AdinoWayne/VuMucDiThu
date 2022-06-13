function rotateString(s: string, goal: string): boolean {
    for(let i = 0; i < s.length; i++) {
        if (s.slice(i) + s.slice(0,i) === goal) return true;
    }
    return false;
};
