'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

const mongooseOptions = {
  useNewUrlParser:true,
  useCreateIndex: true,
};
// const MONGODB_URI = 'mongodb://localhost:27017/stuff';

mongoose.connect(process.env.MONGODB_URI, mongooseOptions);

require('./src/app.js').start(process.env.PORT);
