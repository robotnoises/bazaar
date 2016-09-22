'use strict';

const config = require('./../../config');

/**
 * Models - Define and make model associations. Sync with database.
 */

var User = require('./definitions/User');
var Role = require('./definitions/Role');
var Item = require('./definitions/Item');
var ItemCondition = require('./definitions/ItemCondition');

// Map of defined models (defined in init())
var definedModels = {};

// Initialize all db Models
function init(sequelize) {

  /** 
   * Define and sync data models 
   */

  let user = User.define(sequelize);
  let role = Role.define(sequelize);
  let item = Item.define(sequelize);
  let itemCondition = ItemCondition.define(sequelize);

  // Add to definedModels hashMap
  // Node: each key needs to be lower case
  definedModels.user = user;
  definedModels.role = role;
  definedModels.item = item;
  definedModels.itemcondition = itemCondition;

  /**
   * Define various Model associations using the above definitions
   */

  // A User can have many roles
  user.hasMany(role, {
    foreignKey: 'fk_user'
  });

  // An Item can have a condition
  item.hasOne(itemCondition, {
    foreignKey: 'fk_item'
  });

  /**
   * Synchronize Models to Database 
   */

  return sequelize.sync({ 
    // Forced-sync (DROP IF EXIST) when in development and debug modes
    force: (config.development && config.debug) 
  });
}

// Get a specific model definition
function getModel(modelName) {
  
  let mName = (modelName) ? modelName.toLowerCase() : '';

  if (!!definedModels[mName]) {
    return definedModels[mName];
  } else {
    throw new Error('Model ' + modelName + ' is not defined!');
  }
}

module.exports = {
  init: init,
  getModel: getModel
};