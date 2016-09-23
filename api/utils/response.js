'use strict';

function Response(statusCode, body, message) {
  this.statusCode = statusCode;
  this.body = body;
  this.message = message;
}

/**
 * User responses
 */

function FormattedUser(data) {
  this.email = data.email || '';
  this.userName = data.userName || '';
  this.firstName = data.firstName || '';
  this.lastName = data.lastName || '';
  this.shippingAddress = data.email || '';
  this.roles = data.roles || [];
}

var userResponse = {
  createSuccess: (data, status) => {
    return new Response(200, new FormattedUser(data), 'User created successfully.');
  },
  createError: (data, status) => {
    return new Response(status || 500, data, 'User create error.');
  },
  readSuccess: (data, status) => {
    return new Response(200, new FormattedUser(data), 'User found.');
  },
  readError: (data, status) => {
    return new Response(status || 500, data, 'Find User error.');
  },
  updateSuccess: (data, status) => {
    return new Response(200, new FormattedUser(data), 'User updated successfully.');
  },
  updateError: (data, status) => {
    return new Response(status || 500, data, 'User update error.');
  },
  deleteSuccess: (data, status) => {
    return new Response(200, new FormattedUser(data), 'User deleted successfully.');
  },
  deleteError: (data, status) => {
    return new Response(status || 500, new data, 'User delete error.');
  }
};

module.exports = {
  userResponse: userResponse
};