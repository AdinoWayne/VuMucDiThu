function reorderSpaces(text: string): string {
  const regex = /(\w+)/g;
  const words = [];
  let execResults;
  let cntSpaces = text.length; // Decremented in loop below
  while (null !== (execResults = regex.exec(text))) {
    words.push(execResults[0]);
    cntSpaces -= regex.lastIndex - execResults.index; // A mixed-key array‽
  }
  if (1 === words.length) return `${words[0]}${' '.repeat(cntSpaces)}`;
  const spacedWords = words.join(' '.repeat(cntSpaces / (words.length - 1)));
  const remainingSpaces = ' '.repeat(cntSpaces % (words.length - 1));
  return `${spacedWords}${remainingSpaces}`;
};
