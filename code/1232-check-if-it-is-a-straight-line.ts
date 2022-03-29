function checkStraightLine(coordinates: number[][]): boolean {
        const N = coordinates.length;
        let b;
        for (let i = 0; i < N - 2; i++) {
            b = isColine(
                coordinates[i][0],
                coordinates[i][1],
                coordinates[i + 1][0],
                coordinates[i + 1][1],
                coordinates[i + 2][0],
                coordinates[i + 2][1]
            );
            if (b == false)
                return false;
        }
        return true;
};

function isColine(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): boolean {
        const a = (y3 - y2) * (x3 - x1);
        const b = (y3 - y1) * (x3 - x2);
        return a == b;
}
