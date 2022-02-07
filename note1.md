1. K’th Smallest/Largest Element in Unsorted Array | Set 2 (Expected Linear Time)

```
Input: arr[] = {7, 10, 4, 3, 20, 15}
       k = 3
Output: 7

Input: arr[] = {7, 10, 4, 3, 20, 15}
       k = 4
Output: 10

function swap(arr,i,j)
{
    let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
}
function kthSmallest(arr,l,r,k)
{
    if (k > 0 && k <= r - l + 1)
    {
        let pos = randomPartition(arr, l, r);
        if (pos-l == k-1)
            return arr[pos];
        if (pos-l > k-1)
            return kthSmallest(arr, l, pos-1, k);
        return kthSmallest(arr, pos+1, r, k-pos+l-1);
    }
    return Integer.MAX_VALUE;
}
function partition(arr,l,r)
{
    let x = arr[r], i = l;
    for (let j = l; j <= r - 1; j++)
    {
        if (arr[j] <= x)
        {
            swap(arr, i, j);
            i++;
        }
    }
    swap(arr, i, r);
    return i;
}
function randomPartition(arr,l,r)
{
        let n = r-l+1;
        let pivot = Math.floor((Math.random()) * (n-1));
        swap(arr, l + pivot, r);
        return partition(arr, l, r);
}
 
let arr=[12, 3, 5, 7, 4, 19, 26];
let n = arr.length,k = 3;
document.write("K'th smallest element is "+ kthSmallest(arr, 0, n-1, k));
```
