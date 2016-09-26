'use strict';

const bcrypt = require('bcrypt');
const models = require('./../models');
const isAuth = require('./../middleware/isAuth');

/**
 * Auth Controller - controllers for authenticating Users
 */

let authService = require('./../services/authService');

module.exports = (router) => {

  // Log a User in
  router.post('/auth/login', authService.login);

  // Log a User out
  router.post('/auth/logout', isAuth, authService.logout);
};