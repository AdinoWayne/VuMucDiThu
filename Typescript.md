## 1. Types trong typescript
Về cơ bản typescript có 3 loại types chính đó là
- Any type
- Built in type
- User defined type

Question 1: Sự khác nhau giữa Interface và Type.

- Interface và Type thuộc loại thứ 3 - User defined type.

- Interface có thể merge còn Type thì không  
```
interface Shape {
   name: string;
}

interface Shape {
  color:string;
}

const Circle:Shape = {
  name:'circle',
  color:'blue'
}
// type
type Shape {
   name: string;
}

type Shape {
  color:string;
}

const Circle:Shape = {
  name:'circle',
  color:'blue'
}
error: "Duplicate identifier 'Shape."
```

- Type có thể sử dụng được với "Computed Properties" còn interface thì không  
```
type keys = 'color' | 'name';
interface Shape {
  [key in keys]:string;
}
const Circle:Shape = {
  name:'circle',
  color:'res'
}
error: A computed property name in an interface must refer to an expression whose type is a literal type or a 'unique symbol' type
// type
type keys = 'color' | 'name';
type Shape = {
  [key in keys]:string;
}
const Circle:Shape = {
  name:'circle',
  color:'res'
}
```

- Tuples type
```
type Tuple = [number, number];

interface ITuple {
  0: number;
  1: number;
}

[1, 2, 3] as Tuple; // Conversion of type '[number, number, number]' to type '[number, number]' may be a mistake

[1, 2, 3] as ITuple; // Ok
```
- Type có Unions type còn interface thì không  
```
type colors = 'blue' | 'green' ;

function setColor(color:colors) {
}
```
