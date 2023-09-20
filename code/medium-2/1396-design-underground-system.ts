class UndergroundSystem {
    avg: any;
    train: any;
    constructor() {
        this.avg = new Map();
        this.train = new Map();
    }

    checkIn(id: number, stationName: string, t: number): void {
        this.train.set(id, [stationName, t]);
    }

    checkOut(id: number, stationName: string, t: number): void {
        const [start, s] = this.train.get(id);
        const key = [start, stationName].join();
        if (this.avg.has(key)) {
            let [avg, cnt] = this.avg.get(key);
            this.avg.set(key, [avg * (cnt/++cnt) + ((t - s)/cnt), cnt]);
        } else {
            this.avg.set(key, [(t - s), 1]);
        }
        this.train.delete(id);
    }

    getAverageTime(startStation: string, endStation: string): number {
        return this.avg.get([startStation, endStation].join())[0];
    }
}
// TC O(1)
// SC O(n2)
/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
