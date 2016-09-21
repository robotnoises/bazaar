'use strict';

var Sequelize = require('sequelize');
var bcrypt = require('bcrypt');

const saltRounds = 10;

/**
 * User - A Bazaar User's private profile
 */

module.exports = (sequelize) => {
  
  var User = sequelize.define('user', {
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING
    },
    userName: {
      type: Sequelize.STRING,
      field: 'user_name'
    },
    firstName: {
      type: Sequelize.STRING,
      field: 'first_name'
    },
    lastName: {
      type: Sequelize.STRING,
      field: 'last_name'
    },
    shippingAddress: {
      type: Sequelize.STRING,
      field: 'shipping_address'
    },
    createdAt: {
      type: Sequelize.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: 'updated_at'
    }
  }, {
      instanceMethods: {
        passwordHash: function (password) {
          return bcrypt.hashSync(password, saltRounds);
        },
        passwordValidate: function (password) {
          return bcrypt.compareSync(password, this.password);
        },
      }
    });

  return User.sync({force: true});
};


