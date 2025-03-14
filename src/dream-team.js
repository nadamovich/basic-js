const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let teamName = ''
  if (Array.isArray(members)) {
    for (i = 0; i < members.length; i = i + 1) {
      if (typeof members[i] === 'string') {
        let delSpaces = members[i].trim()
        let teamSymbol = delSpaces[0].toUpperCase()
        teamName = teamName + teamSymbol
      }       
    }return teamName.split('').sort().join('')
  }
  return false
}

module.exports = {
  createDreamTeam
};


