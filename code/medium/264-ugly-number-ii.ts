function nthUglyNumber(n: number): number {
    let multiplicationList = [2,3,5]
    let Answer = [1]
    let i2=0
    let i3=0
    let i5 = 0
    
    while (Answer.length< n){
        let m2 = Answer[i2]*2
        let m3 = Answer[i3]*3
        let m5 = Answer[i5]*5
        let newAnswer = Math.min(m2,m3,m5)
        if(newAnswer===m2){
            i2++
        }
        if(newAnswer===m3){
            i3++
        }
        if(newAnswer===m5){
            i5++
        }
        Answer.push(newAnswer)
    }

    return Answer[n-1]
};
