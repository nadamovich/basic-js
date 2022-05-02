const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const ears = '^^'
  let countedCats = 0
  for (i = 0; i < matrix.length; i = i + 1) {
    for (i2 = 0; i2 < matrix[i].length; i2 = i2 + 1) {
      if (matrix[i][i2] === ears) {
        countedCats = countedCats  + 1
        countedCats = countedCats
      }
    }
  }
  return countedCats
}

module.exports = {
  countCats
};
