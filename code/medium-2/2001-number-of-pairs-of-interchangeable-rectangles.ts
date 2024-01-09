function interchangeableRectangles(rectangles: number[][]): number {
    let ratio = {}
    let res = 0
    for (let i = 0; i < rectangles.length; i++) {
        const rectangle = rectangles[i]
        let r = rectangle[0]/rectangle[1]
        
        if (!ratio[r]) {
            ratio[r] = 0
        }
        res += ratio[r]
        ratio[r]++
    }
    return res
};
// TC O(n)
// SC O(1)
