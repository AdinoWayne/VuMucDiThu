function breakPalindrome(palindrome: string): string {
  let result = palindrome.split("");

  for (let i = 0; i < Math.floor(result.length / 2); i++) {
    if (result[i] !== "a") {
      result[i] = "a";
      return result.join("");
    }
  }

  if (result.length === 1) {
    return "";
  } else {
    result[result.length - 1] = "b";
    return result.join("");
  }
};
