function minExtraChar(s: string, dictionary: string[]): number {
    let max = [], f = i => {
        if ( !s[i] ) return 0
        if ( max[i] ) return max[i]
        for ( let word of dictionary )
            if ( s.substring( i, i+word.length ) == word )
                max[i] = Math.max( ~~max[i], word.length+f( i+word.length ) )
        return max[i] = Math.max( ~~max[i], f( i+1 ) )
    }
    return s.length - f(0)
};
