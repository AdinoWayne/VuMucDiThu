function checkRecord(s: string): boolean {
    var table = new Array(2);
    table[0] = 0; table[1] = 0;
        var tem = 1;    
    for(var i = 0; i < s.length; i++){

        if(s[i] == "A"){
            if(tem == 1) table[1] = 0;
            tem = 0;
            table[0]++;
            if(table[0] > 1) return false;
        }
        if(s[i] == "L"){
            tem = 1;
            table[1]++;
            if(table[1] > 2) return false;
        }      
        if(s[i] == "P") {
            if(tem == 1) table[1] = 0;
            tem = 0;
        }
    }
    return true;
};
