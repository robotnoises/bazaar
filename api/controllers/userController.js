'use strict';

const models = require('./../models');

/**
 * User Controller - controllers for all User API routes
 */

module.exports = (router) => {

  let resp = require('./../utils/response');
  let user = models.getModel('User');

  // Create a User
  router.post('/user', (req, res) => {
    
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
    user.findById(req.params.userId)
      .then((created) => {
        let response = resp.userResponse.readSuccess(created);
        res.status(response.statusCode).json(response);
      })
      .catch((error) => {
        // Todo check Sequelize response
        let response = resp.userResponse.readError(error.errors, 400);
        res.status(response.statusCode).json(response);
      });
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