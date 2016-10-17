'use strict';

const _ = require('lodash');

let Queue = require('./dataStructureService').Queue;

/**
 * Utility functions
 */

// Insert an ad to make sure the grid is filled properly
function insertAd(collection, lastRowItems, lastItemPromoted) {
  // Todo: fetch a real ad
  if (lastRowItems) {
    if (lastRowItems === 2 && lastItemPromoted) {
      collection.push({
        promoted: false,
        type: 1
      });  
    } else if (lastRowItems === 2 && !lastItemPromoted) {
      collection.push({
        promoted: true,
        type: 1
      });
    } else if (lastRowItems === 1 && !lastItemPromoted) {
      collection.push({
        promoted: true,
        type: 1
      });
      collection.push({
        promoted: false,
        type: 1
      });
    } else {
      collection.push({
        promoted: true,
        type: 1
      }); 
    }
  }
}

/**
 * .bazaarItems()
 * 
 * A special sort for the bazaar items grid + ads
 */

function bazaarItems(collection) {
  if (!collection || !collection.length) return [];

  let sorted = [];    // Sorted list

  // sort pattern, where true means a promoted item
  let pattern = [true, false, false, false, true, false, false, false, true];

  // Queues
  let qPromoted = new Queue();  // For promoted Items (long)
  let qRegular = new Queue();   // For regular Items (short)

  // Loop-through and divide promoted && non-promoted items into two queues
  _.forEach(collection, (item) => {
    let queue = (item.promoted) ? qPromoted : qRegular;
    queue.enqueue(item);
  });

  // Start filling the "sorted" array using the above pattern
  let count = 0;
  
  while(!qPromoted.isEmpty() && !qRegular.isEmpty()) {
    let isPromoted = pattern[count % 9];
    let queue = (isPromoted) ? qPromoted : qRegular;
    sorted.push(queue.dequeue());
    count++;
  }

  // Once we exhaust one of the Queues, just dump the remaining items into the sorted array
  let remaining = (qPromoted.isEmpty()) ? qRegular.remaining() : qPromoted.remaining();
  let remainingPromoted = qRegular.isEmpty();

  // By observing the above pattern, there should be 3 "cards" per line,
  // if there is space remaining to fill, fill it with ads
  let lastSortedRowItems = (sorted.length % 3);
  let lastSortedItemPromoted = _.last(sorted).promoted;

  insertAd(sorted, lastSortedRowItems, lastSortedItemPromoted);
  
  // Much like we used ads above in the sorted list, let's ad- fill the remaining items in 
  // a similar manner
  let modulus = remainingPromoted ? 2: 3;
  let lastRemainingRowItems = (remaining.length % modulus);
  let lastRemainingItemPromoted = _.last(remaining).promoted;

  insertAd(remaining, lastRemainingRowItems, lastRemainingItemPromoted);

  let done = sorted.concat(remaining);

  return done;
}

module.exports = {
  bazaarItems: bazaarItems
};