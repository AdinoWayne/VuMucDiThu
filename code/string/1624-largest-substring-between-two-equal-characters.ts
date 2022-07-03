function maxLengthBetweenEqualCharacters(s: string): number {
    let map = new Map();//map {char: index}
    let maxDist = -1;
    for (let i = 0; i < s.length; i++){
        let ch = s.charAt(i);
        if (!map.has(ch)){
            map.set(ch, i);
        } else {
            let lastIdx = map.get(ch);
            let dist = i-lastIdx-1 // excluding duplicate letters
            maxDist = Math.max(maxDist, dist);
        }
    }
    return maxDist;
};
