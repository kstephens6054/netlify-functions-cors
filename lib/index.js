/**
 * This package provides simple CORS support for Netlify serverless
 * functions. The CORS object automatically generates the appropriate
 * CORS headers for both standard HTTP and CORS preflight responses.
 *
 * @module netlify-functions-cors
 */

/**
 * Construct access rule sets using these default values.
 *
 * @package
 */
const defaultRule = {
  allowOrigin: ['*'],
  exposeHeaders: [],
  maxAge: 86400,
  allowCredentials: false,
  allowMethods: ['GET', 'POST', 'OPTIONS', 'HEAD'],
  allowHeaders: ['Content-type'],
  use200StatusCode: false
};

/**
 * The CORS object constructor
 *
 * @param {Object} event
 * @param {Object|Array} options
 */
module.exports = function CORS(event, options) {
  if (!event || !event.headers) {
    throw new TypeError('Invalid netlify function event object');
  }

  this.rules = [];
  this.activeRule = null;
  this.isCORSRequest = false;
  this.isPreflight = false;
};
