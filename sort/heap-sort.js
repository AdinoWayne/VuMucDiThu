function sort(arr)
{
    const num = arr.length;
    const lastParentNode =  Math.floor(num / 2) - 1;
    for (let index = lastParentNode; index >= 0; index--) {
        heap(arr, num, index);
    }

    for (let index = num - 1; index > 0; index--) {
        const temp = arr[index];
        arr[index] = arr[0];
        arr[0] = temp;
        heap(arr, index, 0);
    }
}

function heap(arr, num, index)
{
    let largest = index;
    const left = 2 * index + 1;
    const right = 2 * index + 2;

    if (left < num && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < num && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != index) {
        const temp = arr[index];
        arr[index] = arr[largest];
        arr[largest] = temp;
        heap(arr, num, largest);
    }
}

function printArray(arr)
{
    var n = arr.length;
    for (var i = 0; i < n; ++i)
        document.write(arr[i] + " ");
        
}


var arr = [ 5, 12, 11, 13, 4, 6, 7 ];
var n = arr.length;

sort(arr);

document.write( "Sorted array is <br>");
printArray(arr, n);

