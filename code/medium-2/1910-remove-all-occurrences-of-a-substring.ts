function removeOccurrences(s: string, part: string): string {
    while(s.indexOf(part)!=-1){
        s=s.replace(part,"");
    }
    return s;
};
// TC O(n2) 
// SC O(n)
