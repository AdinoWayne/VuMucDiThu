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


const myArray = [
  { id: '...', name: '...', ... },
];

// unique with id
const unique = myArray.filter(
  (value, index, self) => self.findIndex((m) => m.id === value.id) === index,
);
// way 2 using reduce
const unique = myArray.reduce((accumulator, current) => {
  if (!accumulator.some((x) => x.id === current.id)) {
    accumulator.push(current);
  }
  return accumulator;
}, []);
```

### 6. Flat array(make to simple array)

```
function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}
```

### 7. Decorator

```
function doBusinessJob(arg) {
  console.log('do my job');
}

function logDecorator(job) {
  return function() {
    console.log('start my job');
    const result = job.apply(this, arguments);
    return result;
  }
}

const logWrapper = logDecorator(doBusinessJob);
doBusinessJob();
// do my job
logDecorator();
// start my job
// do my job

function logCreate(Class) {
  return function(...args) {
    console.log('Object created with args: ', args);
    return new Class(...args);
  }
}

@logCreate
class Animal {}
```

### 7. Retry call API Vue & Vuex Clay

```
    handleFailed(func, param) {
      const innerFunc = (func, param, retry, resolve, reject) => {
        func(param).then((res) => {
          resolve(res)
        }).catch((err) => {
          if (retry > 0 && err.message === "Network Error") {
            setTimeout(() => {
              innerFunc(func, param, --retry, resolve, reject);
            }, 100);
          } else {
            reject(err);
          }
        })
      }
      return new Promise((resolve, reject) => {
        innerFunc(func, param, 3, resolve, reject)
      })
    },
    $q.push(
        this.handleFailed(this.FETCH_API, {
          interfaceId: 0,
          options: {}
        })
      );
```
