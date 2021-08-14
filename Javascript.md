#### 1.Swap two values without sub variables in JavaScript
```
1. a = a + b
b = a - b
a = a - b
2. XOR
a = a ^ b
b = a ^ b
a = a ^ b
3. a = b + (b = a, 0)
4. b = a + (a = b) - b
5. a = [b, b = a][0]
6. ES6 [a, b] = [b, a]
```
#### 2. Find the difference between the 2 arrays
```
const diffItem = (arr = [], otherArr = []) =>
  arr.reduce((t, v) => (!otherArr.includes(v) && t.push(v), t), []);

const a = [1, 2, 3, 4, 5];
const b = [2, 3, 6];

console.log(diffItem(a, b)); // > Array [1, 4, 5]
```
#### 3. subdivide the array
```
const chunkArr = (arr = [], size = 1) => {
  return arr.length
    ? arr.reduce((t, v) => (
        t[t.length - 1].length === size
          ? t.push([v])
          : t[t.length - 1].push(v), t)
      , [[]])
    : [];
}

const a = [1, 2, 3, 4, 5];

console.log(chunkArr(a, 2)); // > Array [[1, 2], [3, 4], [5]]
```
#### 3. concat the array
```
const flatArr = (arr = []) => 
  arr.reduce((t, v) => t.concat(Array.isArray(v) ? flatArr(v) : v), [])

const a = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

console.log(flatArr(a));
// > Array [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
```
#### 3. Eliminate duplicate elements
```
const uniq = (arr = []) =>
  arr.reduce((t, v) => t.includes(v) ? t : [...t, v], []);

const a = [2, 1, 0, 3, 2, 1, 2];

console.log(uniq(a)); // > Array [2, 1, 0, 3]
```

#### 4. Randomly get the element of the array
```
var items = [12, 548 , 'a' , 2 , 5478 , 'foo' , 8852, , 'Doe' , 2145 , 119];

var  randomItem = items[Math.floor(Math.random() * items.length)];
```

### 5. filter Array uniq by property . field  
```
const students = [
  {
    name: '... something value',
    ...
  },
];
// key is property would to uniq
const key = 'name';
const arrayUniqueByKey = [...new Map(students.map((item) => [item[key], item])).values()];
```
