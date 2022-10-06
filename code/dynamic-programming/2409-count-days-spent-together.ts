function countDaysTogether(arriveAlice: string, leaveAlice: string, arriveBob: string, leaveBob: string): number {
    const [aA, aL] = [dayOfYear(arriveAlice), dayOfYear(leaveAlice)];
    const [bA, bL] = [dayOfYear(arriveBob), dayOfYear(leaveBob)];

    if (bA > aL || bL < aA) return 0;

    const [_, s, e] = [aA, aL, bA, bL].sort((a, b) => a - b);

    return e - s + 1;
};

const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const dayOfYear = (str) => {
    const [month, day] = str.split('-').map(Number);
    return day + days.slice(0, month - 1).reduce((a, b) => a + b, 0);
};
