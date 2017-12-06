'use strict';

/**
 * Scan through both strings's at the same time, when a difference is
 * encountered:
 *   * if this is the first edit:
 *     * if strings are the same length then consider it a replacement
 *     * if strings are different lengths then consider it a delete from the longer string
 *   * if this is the second edit then return false
 *
 * N = max(|str1|, |str2|)
 * Time: O(N)
 * Additional space: O(1)
 *
 * @param  {string}  str1 The first string
 * @param  {string}  str2 The second string
 * @return {boolean}      True if strings are 0 or 1 edit apart, otherwise false
 */
export function isOneOrLessAway(str1, str2) {
 // I: two strings
 // O: Boolean if they are 0 or 1 edit apart
 // C: Try to do this linear operation
 // E: O(n) time, 1 space/
  var oneEdit;


  for (let j = 0, i = 0; i < str1.length && j < str2.length; i++, j++){
    if (str2[j] !== str1[i]){
      oneEdit = oneEdit + 1 || 1;
    }
    
    if (oneEdit === 1){
      if (str1[i+1] === str2[j]){
        i++
      }  
      if (str2[j+1] === str1[i-1]){
        j++;
      }
    }
    
    if (oneEdit > 1){
      return false;
    }

  }
  return true;
}
