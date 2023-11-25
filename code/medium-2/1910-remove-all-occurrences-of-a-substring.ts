function removeOccurrences(s: string, part: string): string {
    while(s.indexOf(part)!=-1){
    //if it is there, then replacing it with ""
        s=s.replace(part,"");
    }
    return s;
};
