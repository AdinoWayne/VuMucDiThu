function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
        let res = 0;
        for (let i = 0; i < startTime.length; i++) {
            res += startTime[i] <= queryTime && queryTime <= endTime[i] ? 1 : 0;
        }
        
        return res;
};
