function avoidFlood(rains: number[]): number[] {
    let n = rains.length;
    let res = new Array(n).fill(-1);

    let emptyLake = [];
    let map = new Map();

    for (let i = 0; i < n; i++) {
        if (rains[i] > 0) { 
            if (map.has(rains[i])) {
                let it = binary_search(emptyLake, map.get(rains[i])); // Find whether exists the "zero" right after previous filled lake 

                if (it[0] === -1) { // No "zero" is found
                    return [];
                }
                res[it[0]] = rains[i];
                emptyLake.splice(it[1], 1); // remove the "zero" when we use to clear current lake
            }
            map.set(rains[i], i);
        } else { 
            emptyLake.push(i);
        }
    }

    for (let i = 0; i < n; ++i) {
        if (rains[i] === 0 && res[i] < 0) {
            res[i] = 1;
        }
    }

    return res;
}

const binary_search = (array, target) => {
    let start = 0, end = array.length - 1;

    while (start + 1 < end) {
        let mid = start + ((end - start) >> 1);

        if (array[mid] >= target) {
            end = mid;
        } else {
            start = mid;
        }
    }

    if (array[start] >= target) {
        return [array[start], start];
    }

    if (array[end] >= target) {
        return [array[end], end];
    }
    
    return [-1, -1];
}
