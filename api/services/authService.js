'use strict';

let bcrypt = require('bcrypt');
let response = require('./../services/httpResponseService');
let models = require('./../models');
let userService = require('./userService');

let userDAO = models.getModel('User');

function login(req, res) {
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
      res.status(500).end();
    });
}

module.exports = {
  login: login
};