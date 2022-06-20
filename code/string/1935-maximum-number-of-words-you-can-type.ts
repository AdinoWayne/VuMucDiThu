function canBeTypedWords(text: string, brokenLetters: string): number {
  return text
    .split(/\s+/)
    .filter(word => !brokenLetters.split('').some(s => word.includes(s)))
    .length;
};
