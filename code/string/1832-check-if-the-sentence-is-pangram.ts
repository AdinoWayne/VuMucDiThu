function checkIfPangram(sentence: string): boolean {
    var ch = "abcdefghijklmnopqrstuvwxyz";
    var charr = [...ch];
    var set = new Set(charr);
    for(var c of [...sentence])
    {
        if(set.has(c))
        {
            set.delete(c);
        }
    }
    return set.size === 0 ? true: false;
};
