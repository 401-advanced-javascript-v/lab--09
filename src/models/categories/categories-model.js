'use strict';
/**
 * require a memory model
 */
const Model = require('../memory-model.js');

/**
 * build schema file for categories
 */
const schema = {
  _id: {required:true},
  name: {required:true},
};

/**
 * define class categories as a extend of Model
 */
class Categories extends Model {}

module.exports = new Categories(schema);
