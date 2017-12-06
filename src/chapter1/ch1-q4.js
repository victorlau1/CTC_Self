'use strict';

/**
 * Go through characters in string and set flag to indicate if there is an
 * odd number of that character. If there is more than one character with an
 * odd number of occurences then it cannot be a palindrome.
 *
 * N = |str|
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string[]} str String to check as a character array
 * @return {boolean}      True if input string is a permutation of a palindrome (ignoring spaces), otherwise false
 */
export function isPalindromePermutationsSet(str) {
  if (!str || str === undefined){
    return false
  }
  if (JSON.stringify(str) === '[]'){
    return true
  }
  var charObj = {};
  for (var i = 0; i < str.length; i ++){
    charObj[str[i]] = charObj[str[i]]  + 1 || 1 
  }
  var hasMany = 0;
  for (var key in charObj){
    if (charObj[key] % 2 === 1 && key !== ' '){
      hasMany++
    }
    if (hasMany > 1){
      return false;
    }
  }

  return true
}
