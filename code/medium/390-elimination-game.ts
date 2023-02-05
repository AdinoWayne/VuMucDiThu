function lastRemaining(n: number): number {
    let start = 1, diff = 1, direction = false;
    
    while(n > 1) {
        if(n % 2 === 1 || direction === false) {
            start += diff;
        }
        n = Math.floor(n / 2);
        diff *= 2;
        direction = !direction;
    }
    return start;
};

// When will start be updated?

// if we move from left
// if we move from right and the total remaining number % 2 == 1

// O(logN) 
