function minTimeToVisitAllPoints(points: number[][]): number {
    const size=points.length;
    let total_t=0;
    for (let i = 0; i < size -1; i ++) {
        const x=Math.abs(points[i][0]-points[i+1][0])
        const y=Math.abs(points[i][1]-points[i+1][1])
        total_t+=Math.max(x,y)
    }
    return total_t
};
