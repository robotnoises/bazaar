'use strict';

const DataType = require('sequelize');

/**
 * Shipping Address - A Bazaar User's shipping address
 */

// Define User Model
function define(sequelize) {
  
  let ShippingAddress = sequelize.define('shipping_address', {
    address: {
      type: DataType.STRING,
      allowNull: false
    },
    city: {
      type: DataType.STRING,
      allowNull: false
    },
    state: {
      type: DataType.STRING,
      allowNull: false
    },
    zip: {
      type: DataType.STRING,
      allowNull: false
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

  return ShippingAddress;
}

module.exports = {
  define: define 
};