function canFormArray(arr: number[], pieces: number[][]): boolean {
    if (arr == null || arr.length == 0 || pieces == null || pieces.length == 0) {
        return false;
    }

    const valueToLocation = {};
    for (let i = 0; i < pieces.length; i++) {
        valueToLocation[pieces[i][0]] = i;
    }

    let arrIndex = 0;

    while (arrIndex < arr.length && valueToLocation[arr[arrIndex]] !== undefined) {
        let subArr = pieces[valueToLocation[arr[arrIndex]]];
        for (let j = 0; j < subArr.length; j++) {
            if (arrIndex < arr.length && subArr[j] == arr[arrIndex]) {
                arrIndex++;
            } else {
                return false;
            }
        }
    }

    return arrIndex == arr.length;
};
