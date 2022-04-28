function largestAltitude(gain: number[]): number {
    let higher = gain[0] > 0 ? gain[0] : 0;
    for (let i = 1; i < gain.length; i++) {
        gain[i] = gain[i] + gain[i - 1];
        higher = Math.max(gain[i], higher)
    }
    return higher;
};
