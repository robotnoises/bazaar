'use strict';

const models = require('./../models');

/**
 * User Controller - controllers for all User API routes
 */

module.exports = (router) => {
  
  // Create a User
  router.post('/user', (req, res) => {
    
    let user = models.getModel('User');
    
    user.create(req.body)
      .then((created) => {
        res.status(200).json('OK'); // Todo return User ViewModel object
      })
      .catch((error) => {
        res.status(500).json(error);
      });
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