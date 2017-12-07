'use strict';

import { getLength } from './helpers';

/**
 * Walk one pointer ahead k nodes first then create a second pointer to the
 * start of the list. Walk both pointers until the first one hits the end of the
 * list, at that point the second pointer will be pointing to the kth to last
 * node.
 *
 * N = |list|
 * Time: O(N)
 * Additional space: O(1)
 */
export function kthToLastTwoPointers(list, k) {
  var first = list;
  var second = list;
  if (!list){
    throw new Error('invalid list')
  }
  var counter = k;
  while(counter !== 0){
    if (first.next === null && counter > 0){
      throw new Error('list is not long enough')
    } 
    first = first.next
    counter--;
  }
  
  while(first.next){
    first = first.next;
    second = second.next;
  }

  return second.val;
}

/**
 * Determine the length of the input list. Subtract k from the calculated length
 * and skip that many nodes from the start of the list. That node is the kth to
 * last.
 *
 * N = |list|
 * Time: O(N)
 * Additional space: O(1)
 */
export function kthToLastLength(list, k) {

  if (!list){
    throw new Error('invalid list')
  }
  var counter = 0;
  var node = list
  while (node.next){
    counter++
    node = node.next
  }

  if (counter < k){
    throw new Error('list is not long enough')
  }

  node = list
  while(counter - k !== 0){
    node = node.next
    counter--;
  }
  return node.val
}
