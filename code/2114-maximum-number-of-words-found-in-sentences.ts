function mostWordsFound(sentences: string[]): number {
        let ans=0
        for (let i = 0; i < sentences.length; i++) {
            let temp=sentences[i].split(" ").length;
            if (temp > ans) ans=temp
        }
        return ans
};
