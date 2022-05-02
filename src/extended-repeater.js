const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let { 
    repeatTimes = 1, 
    separator = '+', 
    addition = '', // 
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options
  let repeatingString = [] 
  for (let i = 0; i < repeatTimes; i = i + 1) {
    let repeatingStringArr = []
    if (additionRepeatTimes === undefined) {
      repeatingString.push(str)
    } else {
      for (let i2 = 0; i2 < additionRepeatTimes; i2 = i2 + 1) {
        if (addition === null) {
          repeatingStringArr.push(addition + '')
        } else { 
          repeatingStringArr.push(addition)
        }
      }
      const arrAdd = repeatingStringArr.join(`${additionSeparator}`)
      repeatingString.push(str + arrAdd)
    }
  }
  return repeatingString.join(`${separator}`)
}

module.exports = {
  repeater
};
