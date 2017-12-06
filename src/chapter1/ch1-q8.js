'use strict';

/**
 * Do a first pass through the matrix to find which cells have 0's. When a 0 is
 * found then mark that row and column as needing to be zeroed out. On the second
 * pass zero out any cells that need to be zeroed out based on the row or column
 * indicators.
 *
 * N = matrix Y dimension
 * M = matrix X dimension
 * Time: O(N * M)
 * Additional space: O(N + M)
 *
 * @param  {array} matrix Matrix to be zeroed in-place
 * @return {array}        Matrix that has been zeroed, same object as input
 */
export function zeroMatrix(matrix) {
  var rowObj = {};
  var colObj = {};
  if (!matrix || matrix === null || matrix.length === 0){
    throw new Error('invalid matrix')
  }
  matrix.forEach((row, rowIndex) =>{
    row.forEach((element, colIndex) =>{
      if (element === 0){
        rowObj[rowIndex] = 1;
        colObj[colIndex] = 1;
      }
    })
  })

  matrix.forEach((row, rowIndex) => {
    if (rowObj[rowIndex] === 1){
      for (var col = 0; col < row.length; col++){
        matrix[rowIndex][col] = 0;
      }
    }
    row.forEach((element, colIndex) => {
      if (colObj[colIndex] === 1){
        matrix[rowIndex][colIndex] = 0
      }
    })
  })
  return matrix;
}
