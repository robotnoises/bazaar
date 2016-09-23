'use strict';

const userService = require('./../services/userService');

/**
 * User Controller - controllers for all User API routes
 */

module.exports = (router) => {

  // Create a User
  router.post('/user', userService.create);

  // Get a specific User
  router.get('/user/:userId', userService.get);

  // Update a specific User
  router.put('/user/:userId', (req, res) => {
    res.status(200).send('OK');
  });

  // Delete a specific User
  router.delete('/user/:userId', (req, res) => {
    res.status(200).send('OK');
  });
};