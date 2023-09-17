function numOfMinutes(n: number, headID: number, manager: number[], informTime: number[]): number {
    manager.forEach((_, index) => timeFromEmployeeToHead(index))
        
    return Math.max(...informTime);
    
    function timeFromEmployeeToHead(id) {
        if (manager[id] !== -1) {
            informTime[id] += timeFromEmployeeToHead(manager[id]);
            manager[id] = -1
        }
        return informTime[id];
    }
};
// TC O(n)
// SC O(n)
