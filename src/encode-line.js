const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let line = [] 
  let encodedLine = 1 
  for (let i = 0; i < str.length; i = i + 1) {
    if (str[i] === str[i + 1]) { 
      encodedLine = encodedLine + 1 
    } else {
      if (encodedLine === 1) { 
        line.push(str[i]) 
      } else {
        line.push(encodedLine + str[i]) 
      }
      encodedLine = 1 
    }
  }
  return line.join(''); 
}

module.exports = {
  encodeLine
};
