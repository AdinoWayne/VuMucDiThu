function clumsy(N: number): number {
    if(N < 3) return N
    
    let ans = Math.floor((N) * (N-1) / (N-2))
    
    N -= 3
    
    while(N > 0){
        
        if(N > 3){
            ans += ((N) - Math.floor((N-1) * (N-2) / (N-3)))
        } else if(N === 3){
            ans += ((N) - (N-1) * (N-2))
        } else if(N === 2){
            ans += ((N) - (N-1))
        } else if(N === 1){
            ans += (N)
        }
            
        N -= 4
    }
    
    return ans
};
