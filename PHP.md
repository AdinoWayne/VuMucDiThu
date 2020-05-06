# 1. find string one in string two.
```strpos($str1,$str2) !== false``` ( ```strpos``` returns the starting position index).
# 2. merge 2 array.
``` array_replace($a, $b) === $b + $a ``` (```array_replace``` prioritize $b, ```+ ``` operator prioritize $a).
# 3. sort array.
```asort($arr, SORT_STRING|SORT_FLAG_CASE|SORT_NATURAL)``` 
# 4. check power of two.
``` fun(n) { return (n & (n - 1) === 0) ? true : false }```
# 5. find range number missing.
``` func(arr) { $new_arr = range($arr[0],max($arr)); return array_diff($new_arr, $arr); } ```
# 6. check power of n.
``` func(n, x) { while(x % n === 0) { $x /= n;} return ($x === 1) ? true : false}```
# 7. swap 2 variable a, b.
``` list($a, $b) = array($b, a) ``` // 
``` $a =  $a + $b;$b = $a - $b;$a = $a - $b; ```
# 8. sqrt algorithm.
```
function my_sqrt($n)
{
  $x = $n;
  $y = 1;
  while($x > $y)
  {
    $x = ($x + $y)/2;
    $y = $n/$x;
  }
  return $x;
}
```
