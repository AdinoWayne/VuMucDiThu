function merge(arr, left, mid, right)
{
    const length1 = mid - left + 1;
    const length2 = right - mid;
    let arrLeft = [];
    let arrRight = [];
    let index1 = 0;
    let index2 = 0;
    let key = left;
    for (let index = 0; index < length1; index++) {
        arrLeft[index] = arr[left + index]
    }
    for (let index = 0; index < length2; index++) {
        arrRight[index] = arr[mid + 1 + index]
    }
    while (index1 < length1 && index2 < length2) {
        if (arrLeft[index1] <= arrRight[index2]) {
            arr[key] = arrLeft[index1];
            index1++;
        } else {
            arr[key] = arrRight[index2];
            index2++;
        }
        key++;
    }

    while (index1 < length1) {
        arr[key] = arrLeft[index1];
        index1++;
        key++;
    }

    while (index2 < length2) {
        arr[key] = arrRight[index2];
        index2++;
        key++;
    }
}
function mergeSort(arr,left, right){
    if (left >= right) {
        return;
    }
    let mid = left + Math.floor((right - left)/ 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
}
function printArray( A, size)
{
    for (var i = 0; i < size; i++)
       document.write(  A[i] + " ");
}
  
  
var arr = [38, 27, 43, 3, 9, 82, 10];
    var arr_size = arr.length;
  
    document.write(  "Given array is <br>");
    printArray(arr, arr_size);
  
    mergeSort(arr, 0, arr_size - 1);
  
    document.write( "<br>Sorted array is <br>");
    printArray(arr, arr_size);
