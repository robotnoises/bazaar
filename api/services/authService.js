'use strict';

const bcrypt = require('bcrypt');
const response = require('./../services/httpResponseService');
const models = require('./../models');
const userService = require('./userService');

const userDAO = models.getModel('User');
const roleDAO = models.getModel('Role');

/**
 * Log a User in
 */

function login(req, res) {

  // Find a user via the supplied email

  userDAO
    .find({where: {email: req.body.email}, include: { model: roleDAO }})
    .then((user) => {

      let userPassMatch = (user) ? bcrypt.compareSync(req.body.password, user.dataValues.password) : false;
      
      if (userPassMatch) {        
        // Persist the session
        req.session.isAuthenticated = true;
        req.session.user = new userService.Formatted(user);
        
        // Save session to Redis
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

function logout(req, res) {
  req.session.destroy((error) => {
    if (!error) {
      res.status(200).send('Logged-out');
    } else {
      res.status(500).send();
    }
  });
}

module.exports = {
  login: login,
  logout: logout
};