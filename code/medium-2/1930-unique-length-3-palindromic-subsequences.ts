function countPalindromicSubsequence(s: string): number {
    var l={}
	//Keeps track of the last index of each unique character from the input string
    var r={}
	//Counter for unique length-3 palindrome
    var res=0
	//Stores unique length-3 palindrome and checks for duplicates
    var marked= new Set();
    for (let i=0; i<s.length; i++){
        if (l[s[i]]==undefined)l[s[i]]=i
        r[s[i]]=i
    }
    
    for (let key in l){
        for (let i=l[key]+1; i<r[key]; i++){
          if (!marked.has(key+s[i]+key)){
              marked.add(key+s[i]+key);
              res++;
          }
        }
    }
    return res;
};
// TC O(n2)
// SC O(n)
