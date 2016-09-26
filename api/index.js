'use strict';

/**
 * Api Routes - Wire-up various API endpoints 
 */

function init(router) {
  require('./controllers/userController')(router);
  require('./controllers/authController')(router);
  require('./controllers/itemController')(router);

  console.log('API is ready to go');
}

module.exports = {
  init: init
};