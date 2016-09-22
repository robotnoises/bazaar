'use strict';

/**
 * User Controller - controllers for all User API routes
 */

module.exports = (router) => {
  
  // Create a User
  router.post('/user', (req, res) => {
    res.status(200).send('OK');
  });

  // Get a specific User
  router.get('/user/:userId', (req, res) => {
    res.status(200).send('OK');
  });

  // Update a specific User
  router.put('/user/:userId', (req, res) => {
    res.status(200).send('OK');
  });

  // Delete a specific User
  router.delete('/user/:userId', (req, res) => {
    res.status(200).send('OK');
  });
};