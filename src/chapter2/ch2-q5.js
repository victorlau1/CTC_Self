'use strict';

import { createNode } from './helpers';

/**
 * Walk through both lists in step summing each digit. Where the sum is greater
 * than 10 then maintain a carry value. Where one list is longer than the other
 * then copy the rest of the digits across adding any carry values.
 *
 * N = max(|list1|, |list2|)
 * Time: O(N)
 * Additional space: O(N) - algorithm doesn't require additional storage in
 * general, additional space is used to create the new list.
 */
export function sumListsReverseOrder(list1, list2) {
  //Assumes equal length;\
  
  let node1 = list1;
  let node2 = list2;
  let counter = 0; 
  let total;
  let currentNode = {next: null};
  let resultNode = currentNode

  while(node1 && node2){

    total = node1.val + node2.val + counter;

    if (total >= 10){
      counter = 1;
      currentNode.next = new createNode(total - 10);
    } else {
      currentNode.next = new createNode(total);
      counter = 0
    }

    node1 = node1.next
    node2 = node2.next
    currentNode = currentNode.next;
  }

  node1 = node1 || node2
  while(node1){
    total = node1.val + counter;
    if (total >= 10){
      currentNode.next = new createNode(total - 10)
      counter = 1;
    } else {
      counter = 0;
      currentNode.next = new createNode(total)
    }
    node1 = node1.next
    currentNode = currentNode.next;
  }
 
  if (counter > 0){
    currentNode.next = new createNode(counter);
  }

  return resultNode.next;
}
