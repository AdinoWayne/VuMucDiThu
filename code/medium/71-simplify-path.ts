function simplifyPath(path: string): string {
    let stack = [];
    const pathStr = path.split('/');
    
    for (let i=0;i<pathStr.length;i++) {
        if (pathStr[i]=='.' || pathStr[i]=='') continue;
        if (pathStr[i]=='..') stack.pop();
        else stack.push(pathStr[i]);
    }
    
    return '/'+stack.join('/');
};
