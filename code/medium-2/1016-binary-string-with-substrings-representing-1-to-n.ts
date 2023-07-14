function queryString(s: string, n: number): boolean {
    for(let i=n;i>=1;i--){
        let bin=(i>>>0).toString(2);
        if(s.search(bin)===-1)
            return false;
    }
    return true;
};
// TC O(n)
// SC O(1)
