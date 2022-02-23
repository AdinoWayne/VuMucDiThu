function intersection(nums1: number[], nums2: number[]): number[] {
    const n1 = nums1.length;
    const n2 = nums2.length;
    let obj = {};
    let result = [];
    if (n1 <= n2) {
        for (let i = 0; i < n1; i++) {
            if (obj[nums1[i]] == undefined) {
                obj[nums1[i]] = i;
            }
        }
        for (let i = 0; i< n2; i++) {
            if (obj[nums2[i]] != undefined) {
                result.push(nums2[i]);
                delete obj[nums2[i]];
            }
        }
    } else {
        for (let i = 0; i< n2; i++) {
            if (obj[nums2[i]] == undefined) {
                obj[nums2[i]] = i;
            }
        }
        for (let i = 0; i< n1; i++) {
            if (obj[nums1[i]] != undefined) {
                result.push(nums1[i]);
                delete obj[nums1[i]];
            }
        }
    }
    return result;
};

<!-- or -->

const filteredArray = array1.filter(value => array2.includes(value));

<!-- or -->

var filteredArray = array1.filter(function(n) {
    return array2.indexOf(n) !== -1;
});

<!-- or -->

/* finds the intersection of 
 * two arrays in a simple fashion.  
 *
 * PARAMS
 *  a - first array, must already be sorted
 *  b - second array, must already be sorted
 *
 * NOTES
 *
 *  Should have O(n) operations, where n is 
 *    n = MIN(a.length(), b.length())
 */
function intersect_safe(a, b)
{
  var ai=0, bi=0;
  var result = [];

  while( ai < a.length && bi < b.length )
  {
     if      (a[ai] < b[bi] ){ ai++; }
     else if (a[ai] > b[bi] ){ bi++; }
     else /* they're equal */
     {
       result.push(a[ai]);
       ai++;
       bi++;
     }
  }

  return result;
}
