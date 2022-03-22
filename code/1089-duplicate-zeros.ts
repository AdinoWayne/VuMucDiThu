/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
  let temp = [];
  for (let elem of arr) {
    if (elem === 0) {
      temp.push(0);
      temp.push(0);
    } else {
      temp.push(elem);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = temp[i];
  }
};
