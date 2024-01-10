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
// SC O(n)
// Idea is very easy. We need to find the ratio of width and height for each rectangle in the vector.
// Now, if we have already seen that ratio earlier in the map, simply add the count of ratio to result. It includes all the possbile combinations of rectangle pairs with same ratio.
// Also, increment the count of current ratio in the map as it denotes the number of rectangle with current ratio.
