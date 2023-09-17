function maxArea(h: number, w: number, horizontalCuts: number[], verticalCuts: number[]): any {
    let mod = 1e9 + 7;
    
    horizontalCuts.sort(function(a, b) {
        return a - b;
    });
    
    verticalCuts.sort(function(a, b) {
        return a - b;
    });
    
    let maxHeight = verticalCuts[0];
    let maxWidth = horizontalCuts[0]
    
    verticalCuts.push(w);
    horizontalCuts.push(h);
    
    for (var i = 0; i < verticalCuts.length - 1; i++) {
        if (verticalCuts[i+1] - verticalCuts[i] > maxHeight) {
            maxHeight = verticalCuts[i+1] - verticalCuts[i];
        }
    }
    for (var i = 0; i < horizontalCuts.length - 1; i++) {
        if (horizontalCuts[i+1] - horizontalCuts[i] > maxWidth) {
            maxWidth = horizontalCuts[i+1] - horizontalCuts[i];
        }
    }
    
    return BigInt(maxHeight) * BigInt(maxWidth) % BigInt(mod)
};
