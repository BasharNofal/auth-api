'use strict';

require('dotenv').config();
require('./src/server.js').start(process.env.PORT);

// Start up DB Server
const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.MONGODB_URI, options)


// Start the web server
