function minMovesToSeat(seats: number[], students: number[]): number {
        let ans=0
        seats.sort((a, b) => a - b)
        students.sort((a, b) => a - b)
        for(let i = 0; i < seats.length; i++){
            ans = ans + Math.abs(seats[i]-students[i])
        }
        return ans
};
