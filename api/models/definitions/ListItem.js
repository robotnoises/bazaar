'use strict';

const DataType = require('sequelize');

/**
 * ListItem - A Bazaar Item placeholder
 */

// Define ListItem Model
function define(sequelize) {

  let ListItem = sequelize.define('list_item', {
    promoted: {
      type: DataType.BOOLEAN,
      defaultValue: false
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

  return ListItem;
}

module.exports = {
  define: define 
};