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

2. Given a sorted array and a number x, find the pair in array whose sum is closest to x

```
Input: arr[] = {10, 22, 28, 29, 30, 40}, x = 54
Output: 22 and 30

Input: arr[] = {1, 3, 4, 7, 10}, x = 15
Output: 4 and 10


function printClosest(arr,n,x)
{
    let res_l=0, res_r=0;
    let l = 0, r = n-1, diff = Number.MAX_VALUE;

    while (r > l)
    {
        if (Math.abs(arr[l] + arr[r] - x) < diff)
        {
            res_l = l;
            res_r = r;
            diff = Math.abs(arr[l] + arr[r] - x);
        }
        if (arr[l] + arr[r] > x)
            r--;
        else
            l++;
    }
    document.write(
    " The closest pair is "+arr[res_l]+" and "+ arr[res_r]
    );
}

let arr = [10, 22, 28, 29, 30, 40], x = 54;
let n = arr.length;
printClosest(arr, n, x);  
```
