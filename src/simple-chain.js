const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainStart : [],
  getLength() {
    return this.chainStart.length
  },
  addLink(value) {
    let valueToString = '' + value
    this.chainStart.push(valueToString)
    return this
  },
  removeLink(position) {
    if (position < 1 || position > this.getLength() || typeof position !== 'number') {
      this.chainStart = []
      throw new Error("You can't remove incorrect link!")
    } else {
      this.chainStart.splice(position - 1, 1)
      return this
    }
  },
  reverseChain() {
    this.chainStart.reverse() 
    return this
  },
  finishChain() {
    let chainMaked = `( ${this.chainStart.join(' )~~( ')} )`;
    this.chainStart = [];
    return chainMaked; 
  }
};

module.exports = {
  chainMaker
};
