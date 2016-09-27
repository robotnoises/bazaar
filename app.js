'use strict';

const Sequelize = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const config = require('./api/config');
const api = require('./api');
const models = require('./api/models');

let RedisStore = require('connect-redis')(expressSession);

const app = express();
const port = process.env.PORT || 8888;

/**
 * Init
 */

function init() {
  
  console.log('Server started. Listening on port:', port);

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

  models.init(sequelize)
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
  api.init(router);
}

/**
 * Start the server
 */

app.listen(port, init);

/**
 * Express Middleware
 */

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Store User session in Redis
app.use(expressSession({
  store: new RedisStore({
    host: 'localhost',
    port: 6379,
    db: 1
  }),
  secret: config.secret,
  resave: false,
  saveUninitialized: true
}));
