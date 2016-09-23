'use strict';

let models = require('./../models');
let response = require('./httpResponseService');

let userDAO = models.getModel('User');
let roleDAO = models.getModel('Role');

/**
 * Private
 */

// Format a User object for presentation
function FormattedUser(data) {
  this.userId = data.userId || null;
  this.email = data.email || '';
  this.userName = data.userName || '';
  this.firstName = data.firstName || '';
  this.lastName = data.lastName || '';
  this.shippingAddress = data.shippingAddress || '';
  this.roles = data.roles || [];
}

// Various response handlers (still a WIP)
var userResponse = {
  createSuccess: (data, message) => {
    return response.success(200, new FormattedUser(data), message || 'User created successfully.');
  },
  createError: (data, message, status) => {
    return response.error(status || 500, data, message || 'User create error.');
  },
  readSuccess: (data, message) => {
    return response.success(200, new FormattedUser(data), message || 'User found.');
  },
  readError: (data, message, status) => {
    return response.error(status || 500, data, message || 'User not found.');
  },
  updateSuccess: (data, message) => {
    return response.success(200, new FormattedUser(data), message || 'User updated successfully.');
  },
  updateError: (data, message, status) => {
    return response.error(status || 500, data, message || 'User update error.');
  },
  deleteSuccess: (data, message) => {
    return response.success(200, new FormattedUser(data), message || 'User deleted successfully.');
  },
  deleteError: (data, message, status) => {
    return response.error(status || 500, data, message || 'User delete error.');
  }
};

/**
 * API Request handlers
 */

// Create a new User

function create(req, res) {

  let requestBody = req.body;
  let createdUser;

  userDAO.create(requestBody)
    .then((created) => {
      createdUser = created.dataValues;
      return created.addRole(1);
    })
    .then(() => {
      return userDAO.find({where: {userId: createdUser.userId}, include: { model: roleDAO }});
    })
    .then((foo) => {
      res.status(200).json(userResponse.createSuccess(foo));
    })
    .catch((error) => {
      res.status(409).json(userResponse.createError(error, 409));
    });
}

function get(req, res) {

  userDAO.find({where: {userId: req.params.userId}, include: [{ model: roleDAO }]})
    .then((user) => {
      res.status(200).json(userResponse.readSuccess(user));
    })
    .catch((error) => {
      res.status(400).json(userResponse.readError(error, 400));
    });
}

module.exports = {
  create: create,
  get: get,
  response: userResponse,
  Formatted: FormattedUser
};