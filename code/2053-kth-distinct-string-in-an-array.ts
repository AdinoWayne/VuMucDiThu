function kthDistinct(arr: string[], k: number): string {
    let count = {}

    for (const a of arr) {
        if (count[a] == undefined) {
            count[a] = 0
        }
        ++count[a];
    }
    for (const a of arr) {
        if (count[a] == 1 && --k == 0) {
            return a;
        }
    }
    return "";
};
