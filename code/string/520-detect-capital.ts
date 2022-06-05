function detectCapitalUse(word: string): boolean {
  return (
    word.toLowerCase() === word ||
    (word[0] === word[0].toUpperCase() &&
      (word.substr(1) === word.substr(1).toLowerCase() ||
        word.substr(1) === word.substr(1).toUpperCase()))
  );
};
