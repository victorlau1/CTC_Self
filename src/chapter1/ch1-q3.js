'use strict';

/**
 * Count the number of spaces in the string to calculate the new length of the
 * string and move characters back where required replacing spaces with %20.
 *
 * N = |url|
 * Time: O(N)
 * Additional space: O(1)
 *
 * @param  {string[]} url URL string as a character arra which will be updated in place
 * @return {string[]}     Updated URL character array
 */
export function encodeSpaces(url) {
  if (!url || url.length === 0){
    return url;
  }
  if (!Array.isArray(url)){
    url = url.split('')
  }
  //Linear traversal once through the beginning and en
  var count = 0;
  for (var i = 0; i < url.length + count; i++){
    
  }
  return url
}

