'use strict';

let models = require('./../models');
let userDAO = models.getModel('User');
let response = require('./httpResponseService');

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
  this.shippingAddress = data.email || '';
}

// Various response handlers (still a WIP)
var userResponse = {
  createSuccess: (data, status) => {
    return response.success(200, new FormattedUser(data), 'User created successfully.');
  },
  createError: (data, status) => {
    return response.error(status || 500, data, 'User create error.');
  },
  readSuccess: (data, status) => {
    return response.success(200, new FormattedUser(data), 'User found.');
  },
  readError: (data, status) => {
    return response.error(status || 500, data, 'User not found.');
  },
  updateSuccess: (data, status) => {
    return response.success(200, new FormattedUser(data), 'User updated successfully.');
  },
  updateError: (data, status) => {
    return response.error(status || 500, data, 'User update error.');
  },
  deleteSuccess: (data, status) => {
    return response.success(200, new FormattedUser(data), 'User deleted successfully.');
  },
  deleteError: (data, status) => {
    return response.error(status || 500, data, 'User delete error.');
  }
};

/**
 * API Request handlers
 */

// Create a new User

function create(req, res) {

  let requestBody = req.body;

  userDAO.create(requestBody)
    .then((created) => {
      res.status(200).json(userResponse.createSuccess(created));
    })
    .catch((error) => {
      res.status(409).json(userResponse.createError(error.errors, 409));
    });
}

function get(req, res) {

  userDAO.findById(req.params.userId)
    .then((user) => {
      res.status(200).json(userResponse.readSuccess(user));
    })
    .catch((error) => {
      res.status(400).json(userResponse.readError(error.errors, 400));
    });
}

module.exports = {
  create: create,
  get: get
};