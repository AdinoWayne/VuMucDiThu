function largestTriangleArea(points: number[][]): number {
    let area = 0.0;

    for (let p1 = 0; p1 < points.length; p1++) {
        for (let p2 = p1 + 1; p2 < points.length; p2++) {
            for (let p3 = p2 + 1; p3 < points.length; p3++) {
                area = Math.max(area, getArea(points[p1], points[p2], points[p3]));
            }
        }
    }
    return area;
};
function getArea(p1: number[], p2: number[], p3: number[]) {
    return Math.abs((p2[0] - p1[0]) * (p3[1] - p1[1]) - 
                   0.5 * (p2[0] - p1[0]) * (p2[1] - p1[1]) - 
                   0.5 * (p3[0] - p1[0]) * (p3[1] - p1[1]) -
                   0.5 * (p2[0] - p3[0]) * (p3[1] - p2[1]));
}
