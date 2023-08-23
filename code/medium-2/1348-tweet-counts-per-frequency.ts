class TweetCounts {
    freqInterval: any;
    data: any;
    constructor() {
        this.freqInterval = {
            minute: 60,
            hour: 3600,
            day: 86400,
        };
        this.data = new Map();
    }

    recordTweet(tweetName: string, time: number): void {
        if (this.data.has(tweetName) === false) {
        this.data.set(tweetName, []);
        }
        this.data.get(tweetName).push(time);
    }

    getTweetCountsPerFrequency(freq: string, tweetName: string, startTime: number, endTime: number): number[] {
        const interval = this.freqInterval[freq];
        const ret: any = new Uint16Array(Math.ceil((endTime - startTime + 1) / interval));
        if (this.data.has(tweetName)) {
        for (const time of this.data.get(tweetName)) {
            if (time > endTime || time < startTime) continue;
            ++ret[Math.floor((time - startTime + 1) / interval)];
        }
        }
        return ret;
    }
}

/**
 * Your TweetCounts object will be instantiated and called as such:
 * var obj = new TweetCounts()
 * obj.recordTweet(tweetName,time)
 * var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
 */
