function checkOnesSegment(s: string): boolean {
    let calc = 0
    let flag =  false 
    
    for(let i = 0 ; i< s.length ; i++){
        let x = s.charAt(i)
        
        if(x === "0"){
            flag = true
        }
        
        if(flag && x === "1"){
            return false
        }
        
    }
    return true
};
