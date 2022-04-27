function countStudents(students: number[], sandwiches: number[]): number {
        let count = 0;
        while (students) {
            let student = students.shift();
            if (student == sandwiches[0]) {
                count=0
                sandwiches.shift()
            } else {
                count+=1;
                students.push(student)
            }
            if (count==students.length)
                break;
        }
        return students.length
};
