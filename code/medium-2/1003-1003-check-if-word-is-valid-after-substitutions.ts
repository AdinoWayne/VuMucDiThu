function isValid(S: string): boolean {
    while(S.indexOf('abc')>=0) {
        S=S.split('abc').join('');
    }
    return S.length === 0;
};
