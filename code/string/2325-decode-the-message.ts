function decodeMessage(key: string, message: string): string {
  let result = ''
  let arrKey = Array.from(new Set(key.split(' ').join('')))
  const hash = new Map()
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  
  for (let i = 0; i < alpha.length; i++) {
    hash.set(arrKey[i], alpha[i])
  }

  for (let chr of message) {
    result += hash.get(chr) || ' '
  }
    
  return result
};
