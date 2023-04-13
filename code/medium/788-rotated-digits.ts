function rotatedDigits(N: number): number {
    let count = 0
    for(let i=1;i<N+1;i++){
        let x = (""+i).split("")
        if(x.includes('2') || x.includes('5') || x.includes('6') || x.includes('9')){
            count += 1
            if(x.includes('3') || x.includes('4') || x.includes('7')){
                count -= 1
            }
        }
    }
    return count
};
