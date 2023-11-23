function mergeTriplets(triplets: number[][], target: number[]): boolean {
    const n = triplets.length;
    
    let found1 = false;
    let found2 = false;
    let found3 = false;
    
    for (let i = 0; i < n; ++i) {
        const [num1, num2, num3] = triplets[i];
        
        if (num1 == target[0] && num2 <= target[1] && num3 <= target[2]) {
            found1 = true;
        }
        
        if (num2 == target[1] && num1 <= target[0] && num3 <= target[2]) {
            found2 = true;
        }
        
        if (num3 == target[2] && num1 <= target[0] && num2 <= target[1]) {
            found3 = true;
        }
    }
   
    return found1 && found2 && found3;
};
