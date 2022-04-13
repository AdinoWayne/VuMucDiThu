function canBeEqual(target: number[], arr: number[]): boolean {
        let counter1 = {}
        let counter2 = {}

        for(let i in target) {
            counter1[target[i]] = (counter1[target[i]] || 0) + 1
        }

        for(let i in arr) {
            counter2[arr[i]] = (counter2[arr[i]] || 0) + 1
        }
        return JSON.stringify(counter1) === JSON.stringify(counter2) 
};
