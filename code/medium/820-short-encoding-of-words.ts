function minimumLengthEncoding(words: string[]): number {
    const wordSet = new Set(words)
    words.forEach(word => {
      for (var i = 1; i < word.length; i++) {
        wordSet.delete(word.slice(i))
      }
    })

    return [...wordSet].reduce((acc, word) => {
      acc += word.length + 1
      return acc
    }, 0)
};
