'use strict';

module.exports = {
  
  // Debug mode
  local: (process.env.BAZAAR_DEBUG_MODE === 'true') ? true : false,

  // Development mode - CAUTION: changing this to true will result in forced db sync!
  dropDatabase: (process.env.BAZAAR_DROP_DB === 'true') ? true : false,

  // Auth secret
  secret: process.env.BAZAAR_SESSION_SECRET || 'testsecret',

  // Google Cloud Storage
  googleCloudSecret: process.env.BAZAAR_GOOGLE_CLOUD_SECRET || '',
  googleCloudEmail: process.env.BAZAAR_GOOGLE_CLOUD_CLIENT_EMAIL || '',
  googleCloudProjectId: process.env.BAZAAR_GOOGLE_CLOUD_PROJECT_ID || ''
};