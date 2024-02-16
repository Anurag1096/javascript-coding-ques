function rotateImage(matrix){

    // Replace this placeholder return statement with your code
   let n=matrix.length;
   for(let row=0;row<n/2;row++){
       for(let cols= row; cols<n-row-1;cols++){
        //    now here we handling the swaping
           [matrix[row][cols],matrix[cols][n-1-row]]=[matrix[cols][n-1-row],matrix[row][cols]];
           [matrix[row][cols], matrix[n-1-row][n-1-cols]]=[matrix[n-1-row][n-1-cols],matrix[row][cols]];
           [matrix[row][cols],matrix[n-1-cols][row]]= [matrix[n-1-cols][row],matrix[row][cols]];
           
       }
   }
   return matrix;
   }

export { 
    rotateImage
}