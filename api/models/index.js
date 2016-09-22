'use strict';

var User = require('./User');
var Item = require('./Item');
var Role = require('./Role');

function init(sequelize) {

  // Define and sync data models

  return User(sequelize)
    .then(() => Item(sequelize))
    .then(() => Role(sequelize))
    .catch((error) => {
      console.error(error);
    });
}

module.exports = {
  init: init
};