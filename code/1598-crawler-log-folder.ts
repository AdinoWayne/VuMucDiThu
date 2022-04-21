function minOperations(logs: string[]): number {
        let res = 0
        for (let log of logs) {
            if (log.indexOf('../') > -1) {
                res = Math.max(0, res - 1)
            } else if (log.indexOf('./') > -1) {
                continue;
            } else {
                res += 1;
            }
        }
        return res
};
