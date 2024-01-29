function removeStars(s: string): string {
    let st = []
    for(let c of s){
        if(c === '*')   st.pop()
        else    st.push(c)
    }
    return st.join("")
};
