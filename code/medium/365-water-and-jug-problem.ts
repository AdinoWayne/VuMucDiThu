function canMeasureWater(jug1Capacity: number, jug2Capacity: number, targetCapacity: number): boolean {
    if (targetCapacity >= jug1Capacity + jug2Capacity)
        return targetCapacity === jug1Capacity + jug2Capacity;

    var fetchGCD = (x, y) => {
        return x === 0 ? y : fetchGCD(y % x, x);
    };

    return targetCapacity % fetchGCD(jug1Capacity, jug2Capacity) == 0;
};

// TC O(n2)
// SC O(1)
