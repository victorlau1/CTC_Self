'use strict';

/**
 * Iterate through list keeping a Set of all the values seen. If a seen value is
 * seen again in the list then skip over it.
 *
 * N = |list|
 * Time: O(N) -> Assuming Set is a HashSet structure with O(1) access times
 * Additional space: O(N)
 */
export function removeDuplicatesSet(list) {
  if (!list){
    return list
  }

  var resultSet = new Set();
  resultSet.add(list.val);
  var node = list;
  while(node.next){
    if (resultSet.has(node.next.val)){
      node.next = node.next.next
    } else {
      resultSet.add(node.next.val)
      node = node.next
      }
    }
  return list;
}
