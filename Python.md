#### All unique.
check list unique element
```
def all_unique(list):
    return len(list) == len(set(list))
```

#### Anagrams.
This method can be used to check if two strings are anagrams
```
from collections import Counter

def anagram(first, second):
    return Counter(first) == Counter(second)
```

#### String.
1. print 
Decimal
Octal
Hexadecimal (capitalized)
Binary
```
def print_formatted(number):
    for i in range(1,n + 1):
        pad = n.bit_length()
        print(f'{i:{pad}d} {i:{pad}o} {i:{pad}X} {i:{pad}b}')
```
```
print("%d. %s appears %d times." % (i, key, wordBank[key]))
print("{}. {} appears {} times.".format(i, key, wordBank[key]))
```
