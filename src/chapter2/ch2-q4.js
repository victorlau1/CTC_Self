'use strict';

/**
 * Travel through list and maintain two lists as we travel through. One list
 * contains all the items less than the partition value and the other contains
 * all the items greater than or equal to it.
 *
 * N = |list|
 * Time: O(N)
 * Additional space: O(1) -> as new structures aren't being created, original
 * list is being manipulated.
 */
export function partition(list, val) {
    function nodeMaker(val){
      this.val = val
      this.next = null;
    }

    if (!list){
      throw new Error('invalid list')
    }

    var currentNode = list;
  
    var beforeNode, afterNode, startBNode, startANode;
    while (currentNode) {
      
      if (beforeNode === undefined && currentNode.val < val){
        beforeNode = new nodeMaker(currentNode.val);
        startBNode = beforeNode;
      } else if (afterNode === undefined && currentNode.val >= val){
        afterNode = new nodeMaker(currentNode.val);
        startANode = afterNode;
      } else if (currentNode.val < val){
        beforeNode.next = new nodeMaker(currentNode.val);
        beforeNode = beforeNode.next;
      } else {
        afterNode.next = new nodeMaker(currentNode.val);
        afterNode = afterNode.next;
      }
      currentNode = currentNode.next;
    }
    
    if (beforeNode){
      beforeNode.next = startANode || null;
      beforeNode = startBNode
    } else if (afterNode) {
      beforeNode = startANode;
    }
   
    return beforeNode;
}
