'use strict';

/**
 * Response formatters
 */

// Success
function response(statusCode, body, message) {
  return {
    statusCode: statusCode,
    body: body,
    message: message
  };
}

// Error
function errorResponse(statusCode, error, message) {
  return {
    statusCode: statusCode,
    error: error,
    message: message
  };
}

module.exports = {
  success: response,
  error: errorResponse
};