function nearestValidPoint(x: number, y: number, points: number[][]): number {
        let index = -1;
        let distance = null;
        
        for (let i = 0; i < points.length; i++) {
            if (x == points[i][0] || y == points[i][1]) {
                let current_dis = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
                if (current_dis < distance || distance == null) {
                    distance = current_dis;
                    index = i;
                }
            }
        }
        
        return index;
};
