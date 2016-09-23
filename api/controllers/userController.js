'use strict';

const models = require('./../models');

/**
 * User Controller - controllers for all User API routes
 */

module.exports = (router) => {

  let resp = require('./../utils/response');
  
  // Create a User
  router.post('/user', (req, res) => {
    
    let user = models.getModel('User');
    
    user.create(req.body)
      .then((created) => {
        let response = resp.userResponse.createSuccess(created);
        res.status(response.statusCode).json(response);
      })
      .catch((error) => {
        // Todo check Sequelize response
        let response = resp.userResponse.createError(error.errors, 409);
        res.status(response.statusCode).json(response);
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