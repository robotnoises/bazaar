'use strict';

const DataType = require('sequelize');

/**
 * Ad - A Bazaar Advertisement
 */

// Define Ad Model
function define(sequelize) {

  let Ad = sequelize.define('ad', {
    title: { 
      type: DataType.STRING,
      allowNull: false
    },
    description: {
      type: DataType.TEXT,
      allowNull: false
    },
    link: {
      type: DataType.STRING,
      allowNull: false
    },
    impressions: {
      type: DataType.INTEGER
    },
    clickthroughs: {
      type: DataType.INTEGER
    },
    recurring: {
      type: DataType.BOOLEAN
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

  return Ad;
}

module.exports = {
  define: define 
};