'use strict';

/**
 * This algorithm simply stores each node it sees into a Set structure, if there
 * is a cycle then the first repeat we see will be the start of that cycle and
 * the value we should return.
 *
 * N = |list|
 * Time: O(N) - assumes Set is hashmap based so O(1) costs
 * Additional space: O(N)
 */
export function findStartOfLoopSet(list) {
  var seen = new Set();

  while (list){
    if (seen.has(list.val)){
      return list
    } else {
      seen.add(list.val)
    }
    list = list.next
  }

  return null;
}

/**
 * This algorithm uses the runners principle where we have a slow and fast (2x)
 * runners that both traverse the list. If at some point both runners point to
 * the same node then there is a cycle. Due to the different rate at which they
 * travel they will meet k steps 'before' the start of the cycle so if you reset
 * the slow runner back to the start and leave the faster runner at the meeting
 * point, when they start moving forward again they will eventually meet at the
 * start of the cycle.
 *
 * N = |list|
 * Time: O(N)
 * Additional space: O(1)
 */
export function findStartOfLoop(list) {
  let rabbit = list
  let turtle = list

  while (rabbit && rabbit.next){
    rabbit = rabbit.next.next ;
    turtle = turtle.next;
    if (rabbit === turtle){
      return rabbit;
    }
  }

  return null;

}
