function setMatrixZeros(mat) {

    // Replace this placeholder return statement with your code
    let frow = false
    let fcol = false;
    const numRows = mat.length;
    const numCols = mat[0].length;
    for (let i = 0; i < numCols; i++) {
        if (mat[0][i] === 0) {
            frow = true;
        }
    }
    for (let i = 0; i < numRows; i++) {
        if (mat[i][0] === 0) {
            fcol = true;
        }
    }
    //  scaning the matrix row wise and setting first element in row 
    //  and col to 0
    for (let j = 1; j < numRows; j++) {
        for (let k = 1; k < numCols; k++) {
            if (mat[j][k] === 0) {
                mat[j][0] = 0
                mat[0][k] = 0
            }
        }
    }
    // check every row first element starting from second row

    for (let i = 1; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (mat[i][0] === 0) {
                mat[i][j] = 0
            }
        }
    }
    //check every col starting from second col 
    for (let k = 0; k < numRows; k++) {
        for (let s = 1; s < numCols; s++) {
            if (mat[0][s] === 0) {
                mat[k][s] = 0
            }
        }
    }
    if (frow) {
        for (let i = 0; i < numCols; i++) {
            mat[0][i] = 0;
        }
    }

    if (fcol == true) {
        for (let i = 0; i < numRows; i++) {
            mat[i][0] = 0
        }
    }



    return mat
}

export { setMatrixZeros };
