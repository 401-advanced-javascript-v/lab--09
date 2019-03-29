'use strict';

/**
 * require mongo model
 */
const Model = require('../mongo-model.js');

/**
 * require player schema
 */
const schema = require('./players-schema.js');


/**
 * Players class is a extend to mongo model
 */
class Players extends Model {}

module.exports = new Players(schema);

