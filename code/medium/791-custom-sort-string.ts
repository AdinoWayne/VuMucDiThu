function customSortString(order: string, s: string): string {
  let map = {};
  // iterate throuhg our string and place  map[string[i]] = i
  for (let i = 0; i < order.length; i++) {
    map[order[i]] = i;
  }
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] == undefined) {
      map[s[i]] = Infinity;
    }
  }
  let arrS = s.split("");
 return arrS.sort((a, b) => map[a] - map[b]).join("");
};
// Time complexity: O(nlogn)
// Space complexity: O(nlogn)
