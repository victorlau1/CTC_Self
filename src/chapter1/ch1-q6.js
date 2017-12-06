'use strict';

/**
 * Takes an input string and counts contiguous sequences of the same character
 * and replaces them with XC (X = count, C = character).
 *
 * N = |str|
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string} str [description]
 * @return {[type]}     [description]
 */
export function compressString(str) {
  if (!str || str === undefined){
    return str;
  }
  var strObj = {};
  var strRet = '';
  for (var i = 0; i < str.length; i ++){
    strObj[str[i]] =  strObj[str[i]] + 1 || 1
  }
  if (Object.keys(strObj).length * 2 >= str.length){
    return str;
  }
  
  for (var key in strObj){
    strRet += strObj[key] + key
  }

  return strRet
}
