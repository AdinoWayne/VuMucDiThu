function capitalizeTitle(title: string): string {
    const words = title.toLowerCase().split(' ');
 
    return words.map((word,index)=>word.length  > 2  ?  word[0].toUpperCase() + word.slice(1) : word).join(" ")
};
