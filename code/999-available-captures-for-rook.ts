function numRookCaptures(board: string[][]): number {
   var r, c;
    var row, col;
    
    rook_search:
    for (r = 0; r < 8; r++) {
        for (c = 0; c < 8; c++) {
            if (board[r][c] == 'R') {
                row = r;
                col = c;
                break rook_search;
            }
        }
    }
    
    var captures = 0;
    
    function oneCapture(rStart, cStart, rStep, cStep) {
        for (r = rStart, c = cStart; ; r += rStep, c += cStep) {
            if (!board[r] || !board[r][c]) {
                return 0;            
            } else if (board[r][c] == 'p') {
                return 1;                
            } else if (board[r][c] != '.') {
                return 0;
            }
        }
    }
    
    captures += oneCapture(row-1, col, -1, 0);
    captures += oneCapture(row+1, col, 1, 0);
    captures += oneCapture(row, col-1, 0, -1);
    captures += oneCapture(row, col+1, 0, 1);
    
    return captures;
};
