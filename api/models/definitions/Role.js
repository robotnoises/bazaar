'use strict';

const DataType = require('sequelize');

/**
 * Role - Authorization levels for Users
 */

// A List of possible Roles
const ROLE = {
  USER: 'user',
  ADMIN: 'admin',
  SUPER_ADMIN: 'superadmin'
};

// Define Role Model
function define(sequelize) {

  let Role = sequelize.define('role', {
    value: { 
      type: DataType.STRING
    },
    createdAt: {
      type: DataType.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataType.DATE,
      field: 'updated_at'
    }
  });

  return Role;
}

module.exports = {
  define: define,
  TYPE: ROLE
};
