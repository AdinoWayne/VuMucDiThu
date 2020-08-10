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
