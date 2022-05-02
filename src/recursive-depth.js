const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let calculated = []
    if (arr.some(element => Array.isArray(element)) === true) {
      calculated = this.calculateDepth(arr.flat()) + 1
    } else if (arr.some(element => Array.isArray(element)) === false) { 
      calculated = 1 
    }
    return calculated
  }
}

module.exports = {
  DepthCalculator
};
