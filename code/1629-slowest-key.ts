function slowestKey(releaseTimes: number[], keysPressed: string): string {
        let chArr = keysPressed.split('');
        const len = chArr.length;
        let res = chArr[0];
        let maxNum = releaseTimes[0];

        for (let i = 1; i < len; i++) {
            let tmp = releaseTimes[i] - releaseTimes[i - 1];
            if (tmp > maxNum) {
                maxNum = tmp;
                res = chArr[i];
            } else if (tmp == maxNum && chArr[i] > res) {
                maxNum = tmp;
                res = chArr[i];
            }
        }

        return res;
};
