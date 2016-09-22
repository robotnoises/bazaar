'use strict';

/**
 * Api Routes - Wire-up various API endpoints 
 */

function init(router) {
  require('./controllers/user')(router);
  console.log('API is ready to go');
}

module.exports = {
  init: init
};