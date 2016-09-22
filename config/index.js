'use strict';

module.exports = {
  
  // Debug mode
  debug: (process.env.BAZAAR_DEBUG_MODE === 'true') ? true : false,

  // Development mode - CAUTION: changing this to true will result in forced db sync!
  development: (process.env.BAZAAR_DEVELOPMENT_MODE === 'true') ? true : false,
};