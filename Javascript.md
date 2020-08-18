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
