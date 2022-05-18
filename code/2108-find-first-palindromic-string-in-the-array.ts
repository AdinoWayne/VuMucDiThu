function firstPalindrome(words: string[]): string {
    for (let word of words)
      if (isPalindrome(word))
        return word;
    return "";
};

function isPalindrome(s: string): boolean {
    let i = 0;
    let j = s.length - 1;
    while (i < j)
      if (s.charAt(i++) != s.charAt(j--))
        return false;
    return true;
}
