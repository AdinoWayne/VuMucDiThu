function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {
        let sum1 = 0, sum2 = 0, n = distance.length;
        if (start > destination) {
            var t = start;
            start = destination;
            destination = t
        }
        for (let i = 0; i < n; ++i) {
            if (i >= start && i < destination) {
                sum1 += distance[i];
            } else {
                sum2 += distance[i];
            }
        }
        return Math.min(sum1, sum2);
};
