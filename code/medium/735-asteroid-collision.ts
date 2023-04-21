function asteroidCollision(asteroids: number[]): number[] {
    const s = [];
    for (let i = 0; i < asteroids.length; i++) {
        const a = asteroids[i];
        
        if ((s.length === 0 || s[s.length -1] < 0) && a < 0 ) {
            s.push(a);
        } else if (a > 0) {
            s.push(a);
        } else {
            const pop = s.pop();
            
            // positive pop beats negative a, so pick up pop
            // and re-add it to the stack.
            if (Math.abs(pop) > Math.abs(a)) {
                s.push(pop);
            
            // a has larger size than pop, so pop will get dropped
            // and we'll retry another iteration with the same 
            // negative a asteroid and whatever the stack's state is.
            } else if (Math.abs(pop) < Math.abs(a)) {
                i--;
            // magnitude of positive pop and negative a are the same
            // so we can drop both of them.
            } else { 
                continue;
            }
        }
    }
    
	// The stack should be the answer
    return s;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
