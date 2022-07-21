function checkString(s: string): boolean {
    if(!s.includes('b')) return true
    let firstB = s.indexOf('b');
	
    for(let i = firstB; i < s.length; i++){
        if(s[i] === 'a') return false
    }
    
    return true;
};
