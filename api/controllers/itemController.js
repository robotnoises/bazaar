'use strict';

const models = require('./../models');
const isAuth = require('./../middleware/isAuth');

const itemService = require('./../services/itemService');

/**
 * Item Controller - Bazaar Items
 */

module.exports = (router) => {

  // Add an Item
  router.post('/item', isAuth, itemService.create);

  // Add a photo to an Item
  // router.post('/item/:itemId/photo', todo);

  // Get an Item
  router.get('/item/:itemId', itemService.get);

  // Get a list of Items
  router.get('/item', itemService.get);
};