function countGoodRectangles(rectangles: number[][]): number {
        if (!rectangles.length) {
            return 0;
        }

        let res = 1;
        let maxLen = 0;
        for (let rectangle of rectangles) {
            let maxI = Math.min(rectangle[0], rectangle[1]);
            if (maxI > maxLen) {
                res = 1;
                maxLen = maxI;
            } else if (maxI == maxLen) {
                ++res;
            }
        }
        return res;
};
