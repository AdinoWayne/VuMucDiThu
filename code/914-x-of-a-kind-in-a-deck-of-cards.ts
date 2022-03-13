function hasGroupsSizeX(deck: number[]): boolean {
        let map = {};
        for (let i=0; i<deck.length; i++) {
            let curr = deck[i];
            if (map[curr] !== undefined) {
                map[curr] = map[curr] + 1;
            } else {
                map[curr] = 1;
            }
        }

        let result = 0;
        for(const key in map) {
            result = gcd(map[key], result);
        }
        return result >= 2;
};

function gcd(a: number, b: number) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a%b);
}
