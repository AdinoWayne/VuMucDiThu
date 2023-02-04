function findMinArrowShots(points: number[][]): number {
    let n = points.length;
    let i = 0;
    let res = 0;
    points.sort((a,b)=>a[0]-b[0]);
    
    while(i<n){
        let left = points[i][0], right = points[i][1];
        i++;
        while(i<n && points[i][0]<=right && points[i][1]>=left){
            left = Math.max(left, points[i][0]);
            right = Math.min(right, points[i][1]);
            i++;
        }
        res++;
    }
    return res;
};
