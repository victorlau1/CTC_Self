'use strict';

import { getLength } from './helpers';

/**
 * Find out the length of the two lists first. If they intersect at some point
 * then the length of their tails will be the same and any difference in length
 * must be from before they intersect. If the lists are different lengths then
 * skip the difference in the longer list. Walk through both lists in step until
 * a node that is the same in both lists is found or the end of one of the lists
 * is reached.
 *
 * N = max(|list1|, |list2|)
 * Time: O(N)
 * Additional space: O(1)
 */
export function doIntersect(list1, list2) {

  let node1 = list1;
  let node2 = list2;
  let counter1 = 0;
  let counter2 = 0;
  let head1 = list1;
  let head2 = list2;

  while (node1){
    counter1++;
    node1 = node1.next;
  }

  while(node2) {
    counter2++;
    node2 = node2.next;
  }

  if (counter2 > counter1){
    while (counter2 - counter1 > 0){
      --counter2;
      head2 = head2.next;
    }  
  } else if (counter1 > counter2){
    while(counter1 - counter2  > 0){
      --counter1;
      head1 = head1.next;
    }
  }
  
  let intersection;
  while(head1 && head2){
   if (head1.val === head2.val){
     return head1
   }
   head1 = head1.next;
   head2 = head2.next;
  }
  return intersection;
}
