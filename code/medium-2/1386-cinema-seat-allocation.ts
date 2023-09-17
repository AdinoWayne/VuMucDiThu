function maxNumberOfFamilies(n: number, reservedSeats: number[][]): number {
    reservedSeats.sort((a,b)=>a[0]-b[0])
    let l=1,m=1,r=1
    let currRow=0
    let result=-2
    for (let [i,j] of reservedSeats) {
        if(currRow!==i){
            if(i!=currRow+1) result+=(i-currRow-1)*2
            result+=Math.max(m,r+l)
            currRow=i
            l=1
            r=1
            m=1
        }
        if(j==2||j==3)l=0

        if(j==4||j==5){
            l=0
            m=0
        }
        if(j==6||j==7){
            m=0
            r=0
        }
        if(j==8||j==9)r=0
    }
    return result+Math.max(m,r+l)+(n-currRow)*2
};
// TC O(nlogn)
// SC O(n)
