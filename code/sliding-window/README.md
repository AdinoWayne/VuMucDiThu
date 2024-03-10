## 1. What are Sliding Window Problems?
Sliding window problems are computational problems in which a fixed/variable-size window is moved through a data structure,
typically an array or string, to efficiently process or analyze the continuous subsets of elements.
This technique is used to optimize calculations and find patterns, making it a common approach in algorithm design.

## 2. Key Points to Identify Sliding Window Problems
These problems generally evolve around Finding Maximum / Minimum Subarray, Substrings which satisfy some specific condition.
The size of the subarray or substring ‘K’ will be given or asked in some of the problems.
These problem can easily be solved in O(n2) time complexity using nested loops, using sliding window we can solve these in O(n) Time Complexity.
Required Time Complexity: O(n) or O(nlog(n))
Constraints: n <= 106 , If n is the size of the Array / String.
