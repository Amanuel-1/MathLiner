class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                this.entries[i][j] = 0;
            }
        }
    }
    print() {
        console.table(this.entries);
    }
}
