function halvesAreAlike(s: string): boolean {
    var loopCount = s.length/2; 
    var lString = "";
    var rString = "";
    var newleftstr = "";
    var newrightstr = "";
    var lcount = 0;
    var rcount = 0;
    
    for(var i=0; i< loopCount; i++){
        lString += s[i];
    }
    for(var i=loopCount; i<s.length; i++){
        rString += s[i];
    }
    for(var i=0; i< lString.length; i++){ 
        if(vowels.includes(lString[i])){
             newleftstr = newleftstr + lString[i];
             lcount++;
        }          
    }
    for(var i=0; i< rString.length; i++){
        if(vowels.includes(rString[i])){
             newrightstr = newrightstr + rString[i];
             rcount++;
        }
     }
     return lcount === rcount ? true : false;
};

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
