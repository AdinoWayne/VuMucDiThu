function memLeak(memory1: number, memory2: number): number[] {
    let i;
    for(i = 1; memory1 >= i || memory2 >= i ; i++){    
		if(memory1 < memory2){
			memory2 -= i;
		} 
        else memory1 -= i;
    }        
    return [i,memory1,memory2];
};
