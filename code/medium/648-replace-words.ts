function replaceWords(dictionary: string[], sentence: string): string {
    let wordArr = sentence.split(" ");
    wordArr = wordArr.map(w => {
        for(let i = 0; i <= dictionary.length - 1; i++) {
            if (w.indexOf(dictionary[i]) === 0) {
                w = dictionary[i];
            }
        }
        return w;
    })
    return wordArr.reduce((str, word) => str += `${word} `, "").trim();
};


class Trie{
  isWord: boolean;
  children: object;
  constructor(){
    this.isWord = false;
    this.children = {};
  }
}
function replaceWords(dict: string[], sentence: string): string {
  const root = new Trie();
  for(const word of dict){
    insertIntoTrie(word, root)
  }
  
  const wordsInS = sentence.split(' ');
  const res = [];
  for (const word of wordsInS){
    const newWord = searchTrie(word, root);
    res.push(newWord)
  }
  return res.join(' ');
};

function insertIntoTrie(word, root){
  let node = root;
  for(const c of word){
    const children = node.children;
    if(!children[c]) children[c] = new Trie();
    node = children[c];
  }
  node.isWord = true;
}

function searchTrie(word, root){
  let node = root;
  let newWord = '';
  for(const c of word){
    const children = node.children;
    if(!children[c]) return word;
    newWord += c;
    node = children[c];
    if(node.isWord) return newWord
  }
  return word
}
