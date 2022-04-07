function findLucky(arr: number[]): number {
        let counter = {}
        
        for(let i = 0; i < arr.length; i++) {
            counter[arr[i]] = (counter[arr[i]] || 0) + 1
        }

        let lucky = -1
        for (let key in counter) {
            if (key == counter[key] && parseInt(key) > lucky) {
                lucky = counter[key]
            }
        }
        return lucky
};
