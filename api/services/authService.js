'use strict';

const bcrypt = require('bcrypt');
const response = require('./../services/httpResponseService');
const models = require('./../models');
const userService = require('./userService');

/**
 * Log a User in
 */

function login(req, res) {
  
  const userDAO = models.getModel('User');

  // Find a user via the supplied email

  userDAO
    .findOne({
      where: {
        email: req.body.email
      }
    })
    .then((user) => {
      let passwordsMatch = bcrypt.compareSync(req.body.password, user.dataValues.password);
      
      if (passwordsMatch) {
        // Persist the session
        req.session.isAuthenticated = true;
        req.session.user = new userService.Formatted(user);
        req.session.save(() => {
          res.status(200).send(userService.response.readSuccess(user.dataValues, 'Authentication success.'));
        });
      } else {
        res.status(401).send(userService.response.readError(
          { errorCode: 'UNAUTHORIZED' }, 
          'User entered an invalid email and/or password.',
          401
        ));
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(401).end();
    });
}

module.exports = {
  login: login
};