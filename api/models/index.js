'use strict';

var User = require('./User');
var Item = require('./Item');
var Role = require('./Role');

function init(sequelize) {
  return new Promise((resolve, reject) => {
    
    // Define and sync data models
    
    User(sequelize)
      .then(() => Item(sequelize))
      .then(() => Role(sequelize))
      .then(resolve)
      .catch((error) => {
        reject(error);
      });
  });  
}

module.exports = {
  init: init
};