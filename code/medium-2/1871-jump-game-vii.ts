function canReach(s: string, minJump: number, maxJump: number): boolean {
    let n=s.length,stack=[[minJump,maxJump]],j=0
    for(let i=1;i<n;i++){
        if(s[i]==='1')
            continue
        while(j<stack.length-1&& stack[j][1]<i)
            j++ 
        if(i>=stack[j][0]&& i<=stack[j][1])
            if(i===n-1)
                return true
            else
                stack.push([i+minJump,i+maxJump])
    }
    return false
};
// TC O(n)
// SC O(n)
