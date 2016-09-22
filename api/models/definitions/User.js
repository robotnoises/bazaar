'use strict';

const DataType = require('sequelize');
const bcrypt = require('bcrypt');

const saltRounds = 10;

/**
 * User - A Bazaar User's profile
 */

// Define User Model
function define(sequelize) {
  
  let User = sequelize.define('user', {
    email: {
      type: DataType.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataType.STRING,
      set: function (val) {
        // hash the password using bcrypt
        let hashed = bcrypt.hashSync(val, saltRounds);
        this.setDataValue('password', hashed);
      }
    },
    userName: {
      type: DataType.STRING,
      field: 'user_name'
    },
    firstName: {
      type: DataType.STRING,
      field: 'first_name'
    },
    lastName: {
      type: DataType.STRING,
      field: 'last_name'
    },
    shippingAddress: {
      type: DataType.STRING,
      field: 'shipping_address'
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

  return User;
}

module.exports = {
  define: define 
};