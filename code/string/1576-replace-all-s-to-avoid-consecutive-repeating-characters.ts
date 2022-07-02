function modifyString(s: string): string {
    for (let i = 0; i < s.length; i++){              
        if (s[i] === '?'){
            let rep = '';
            if (s[i-1] !== 'a' && s[i+1] !== 'a') rep = 'a';
            else if (s[i-1] !== 'b' && s[i+1] !== 'b') rep = 'b';
            else rep = 'c';
            s = s.slice(0,i)+rep+s.slice(i+1);
        }
    }
    return s;
};
