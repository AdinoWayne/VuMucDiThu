/**
 * Definition for Employee.
 * class Employee {
 *     id: number
 *     importance: number
 *     subordinates: number[]
 *     constructor(id: number, importance: number, subordinates: number[]) {
 *         this.id = (id === undefined) ? 0 : id;
 *         this.importance = (importance === undefined) ? 0 : importance;
 *         this.subordinates = (subordinates === undefined) ? [] : subordinates;
 *     }
 * }
 */

function getImportance(employees: Employee[], id: number): number {
	    let employeeMap = new Map();
    for (let employee of employees) {
        employeeMap.set(employee.id, {importance : employee.importance, sub : employee.subordinates})
    }
    
    let totalImportance = 0;
    let queue = [id];
    
    while(queue.length > 0) {
        let currentEmployee = employeeMap.get(queue.shift());
        totalImportance += currentEmployee.importance;
        queue.push(...currentEmployee.sub)
    }
    
    return totalImportance
};

// Time complexity is O(N)
// Space complexity is O(N)
