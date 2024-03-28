function removeStars(s: string): string {
    let st = []
    for(let c of s){
        if(c === '*')   st.pop()
        else    st.push(c)
    }
    return st.join("")
};
// Time Complexity: O(n)
// Space Complexity: O(n)
