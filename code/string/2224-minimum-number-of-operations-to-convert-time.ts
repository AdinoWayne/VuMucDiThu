function convertTime(current: string, correct: string): number {
    const [currentHH, currentMM] = current.split(':').map((val) => Number(val));
    const [correctHH, correctMM] = correct.split(':').map((val) => Number(val));
    let total = 0;
    total += correctHH - currentHH;
    let diff = correctMM - currentMM;
    if (correctMM < currentMM) {
        total -= 1;
        diff += 60;
    }
    if (diff >= 15) {
        total += Math.floor(diff / 15);
        diff = diff % 15;
    }
    if (diff >= 5) {
        total += Math.floor(diff / 5);
        diff = diff % 5;
    }
    if (diff > 0) {
        total += diff;
    }
    return total;
};
