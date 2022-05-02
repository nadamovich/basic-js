const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

  function getDNSStats(domains) {
  let dns = {} 
  domains.forEach(domainsFunc)
  function domainsFunc (element) {
    let elementPart = element.split('.');
    let domain = '';
    for (let i = elementPart.length - 1; i > -1; i = i - 1) {
      domain = domain + `.${elementPart[i]}`
      if (dns[domain]) {
        dns[domain] = dns[domain] + 1 
      } else {
        dns[domain] = 1 
      }
    }
  }
  return dns
}


module.exports = {
  getDNSStats
};
