function minOperations(n: number): number {
    // For example when n = 4
    // 1 3 5 7    -> (4 is the middle element)
    // 3 1 ..     -> (steps to increment to become the middle element
    if (n % 2 === 0) {
        // return (n / 2) * (1 + n - 1) / 2; (N = n/2 , A1 = 1 and An = n - 1)
        return n * n / 4; // simplified above
    }
    // For example when n = 5
    // 1 3 5 7 9  -> (5 is the middle element)
    // 4 2        -> (steps to increment to become the middle element)
    // return (n - 1) / 2 * (2 + n - 1) / 2; (N = (n-1)/2 , A1 = 2 and An = n - 1)
    return (n * n - 1) / 4;
	
	// Also you can combine above two cases.
	// return (n * n - n % 2) / 4;
};
