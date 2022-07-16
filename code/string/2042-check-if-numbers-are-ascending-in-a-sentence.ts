function areNumbersAscending(s: string): boolean {
   let a = s.split(" ")
   .filter(x => isNumber(parseInt(x , 10) - 0))
   .map(Number);
   return isAscending(a);
};

const isNumber = (v) => typeof v === 'number' && isFinite(v);

const isAscending = (arr) => {
    return arr.every((x, i) => {
        return i === 0 || x > arr[i - 1];
    });
};
