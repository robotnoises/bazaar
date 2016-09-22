'use strict';

var Sequelize = require('sequelize');
var bcrypt = require('bcrypt');

const saltRounds = 10;

/**
 * User - A Bazaar User's profile
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
      type: Sequelize.STRING,
      // hash the password using bcrypt
      set: function (val) {
        let hashed = bcrypt.hashSync(val, saltRounds);
        this.setDataValue('password', hashed);
      }
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
  });

  // , {
  //     instanceMethods: {
  //       passwordHash: function (password, callback) {
  //         return bcrypt.hash(password, saltRounds, callback);
  //       },
  //       passwordValidate: function (password, callback) {
  //         return bcrypt.compare(password, this.password, callback);
  //       },
  //     }
  //   });

  return User.sync({force: true})
    .then(() => { 
      User.create({
        email: 'davenich@gmail.com',
        password: 'foobarbaz',
        userName: 'david',
        firstName: 'David',
        lastName: 'Nichols',
        shippingAddress: '123 Fart Road, Tallahassee, FL, 32317'
      });
    })
    .catch((error) => {
      console.error(error);
    });
};


