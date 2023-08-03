# Intuition
The problem is to convert a given string s into a zigzag pattern with numRows rows, and then read it line by line. For example, if s = "PAYPALISHIRING" and numRows = 3, the zigzag pattern would be:
```
P   A   H   N
A P L S I I G
Y   I   R
```


# Approach
The code initializes an empty list array_ with numRows empty strings. It then iterates over the characters of the input string s and for each character, it adds the character to the string in the array_ list corresponding to the current row (j), and updates the row index j based on whether the zigzag pattern is going up or down (sign = 1 or -1).

The code then concatenates the strings in the array_ list to form the output string answer_, and returns it.

# Complexity
- Time complexity:
The time complexity of this code is O(n), where n is the length of the input string s. This is because the code iterates over each character of the input string exactly once.

- Space complexity:
The space complexity of this code is O(numRows), because it creates a list of length numRows to store the zigzag pattern.


# Code
```
class Solution:
    def convert(self, s: str, numRows: int) -> str:
      
      array_ = ['' for i in range(numRows)]
      

      i,j=0,0
      sign = 1

      while i<len(s):
          if j>= numRows-1:
              sign = -1
          if j<= 0:
              sign = 1
          if numRows <= 1:
            sign =0
          
          
          array_[j] += s[i]
          i+=1
          j+= sign
              

      answer_  = ""
      for i in array_:
          answer_ += i


      return answer_

```