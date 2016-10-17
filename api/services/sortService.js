'use strict';

const _ = require('lodash');

let Queue = require('./dataStructureService').Queue;

function bazaarItems(collection) {
  if (!collection || !collection.length) return [];

  let sorted = [];    // Sorted list

  let qPromoted = new Queue();  // For promoted Items (long)
  let qRegular = new Queue();   // For regular Items (short)

  let totalCount = collection.length; // total # in the collection
  let pCount = 0; // todo: promoted count
  let rCount = 0; // todo: remaining count

  // sort pattern, where true means a promoted item
  let pattern = [true, false, false, false, true, false, false, false, true];

  _.forEach(collection, (item) => {
    let queue = (item.promoted) ? qPromoted : qRegular;
    queue.enqueue(item);
    totalCount++;
  });

  let count = 0;
  
  while(!qPromoted.isEmpty() && !qRegular.isEmpty()) {
    let isPromoted = pattern[count % 9];
    let queue = (isPromoted) ? qPromoted : qRegular;
    sorted.push(queue.dequeue());
    count ++;
  }

  let remaining = (qPromoted.isEmpty()) ? qRegular.remaining() : qPromoted.remaining();
  let done = sorted.concat(remaining);

  return done;
}

module.exports = {
  bazaarItems: bazaarItems
};