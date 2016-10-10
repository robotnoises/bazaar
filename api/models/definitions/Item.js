'use strict';

const DataType = require('sequelize');

/**
 * Item - A Bazaar Item published for trade
 */

// Define Item Model
function define(sequelize) {

  /**
   * Potential columns:
   * 
   * tags
   * looking_for (items sought in exchange)
   */

  let Item = sequelize.define('item', {
    title: {
      type: DataType.STRING,
      field: 'title',
      allowNull: false
    },
    description: {
      type: DataType.TEXT,
      field: 'description',
      allowNull: false
    },
    ecv: {
      type: DataType.INTEGER,
      field: 'estimated_cash_value'
    },
    createdAt: {
      type: DataType.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataType.DATE,
      field: 'updated_at'
    },
    userId: {
      type: DataType.UUID,
      field: 'fk_user',
      allowNull: false
    }
  });

  return Item;
}

module.exports = {
  define: define 
};