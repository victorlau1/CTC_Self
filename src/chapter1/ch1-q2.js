'use strict';

/**
 * Keep track of characters counts with a Map data structure, fail when
 * str2 has a character different to str2 or if any characters are left over
 * at the end.
 *
 * N = |str1| && M = |str2|
 * Time: O(N + M)
 * Additional space: O(N)
 *
 * @param  {string[]} str2 First string, passed in as a character array
 * @param  {string[]} str1 Second string, passed in as a character array
 * @return {boolean}       True if first and second strings are permutations otherwise false
 */
export function isPermutationMap(str1, str2) {
  var hashmap = new Map();

  for (var i = 0; i < str1.length; i++) {
    hashmap.set(str1[i], hashmap.get(str1[i]) + 1 || 1);
  };

  for (i = 0; i < str2.length; i ++) {
    var count = hashmap.get(str2[i])
    if (!count) {
      return false;
    } else if (count === 1) {
      hashmap.delete(str2[i]);
    } else {
      hashmap.set(str2[i], count-1);
    }
  }

  return (hashmap.size === 0) 

}

/**
 * Sort both strings and check if they are equal afterwards. Permutations will
 * be identical sorted strings.
 *
 * N = |str1| && M = |str2|
 * Time: O(N lg N + M lg M)
 * Additional space: O(1) if able to modify original strings, O(N + M) otherwise
 *
 * @param  {string[]} str2 First string, passed in as a character array
 * @param  {string[]} str1 Second string, passed in as a character array
 * @return {boolean}       True if first and second strings are permutations otherwise false
 */
export function isPermutationSorted(str1, str2) {
  var str1 = str1.sort().join(',');
  var str2 = str2.sort().join(',');
  return (str1 === str2)

}
