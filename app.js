'use strict';

const Sequelize = require('sequelize');
const express = require('express');
const config = require('./config');
const apiRoutes = require('./api/routes');
const apiModels = require('./api/models');

/**
 * Start server
 */

const app = express();
const port = process.env.PORT || 8888;

app.listen(port, () => {
  console.log('Server started. Listening on port:', port);
});

/**
 * Connect to db
 */

var sequelize = new Sequelize(
  process.env.BAZAAR_DB_NAME, 
  process.env.BAZAAR_DB_USER, 
  process.env.BAZAAR_DB_PASS, {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
});

/**
 * Define db Models
 */

apiModels.init(sequelize)
  .then(() => {
    console.log('db synced');
  })
  .catch((error) => {
    console.error('db sync error:', error);
  });

/**
 * Init API routes 
 */ 

const router = express.Router({ mergeParams: true });

app.use('/api/v1', router);
apiRoutes.init(router);