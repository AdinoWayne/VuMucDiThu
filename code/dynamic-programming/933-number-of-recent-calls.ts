class RecentCounter {
    requests: number[];
    // First index of a request <= 3000 ms in the past
    firstRelevantRequest: number;

    constructor() {
        this.requests = [];
        this.firstRelevantRequest = 0;
    }

    ping(t: number): number {
        this.requests.push(t);
        
        while (t - this.requests[this.firstRelevantRequest] > 3000) {
            // Increment the index until it once again refers to
            // first request <= 3000 ms in the past
            this.firstRelevantRequest += 1;
        }
        
        // All requests from this index on are in the past 3000 ms
        return this.requests.length - this.firstRelevantRequest;
    }
}
