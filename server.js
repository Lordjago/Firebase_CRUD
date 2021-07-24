'use strict';
//Import all dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const studentRoutes = require('./routes/students-routes');
const app = express();

//use thme

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/api',studentRoutes.routes);


app.listen(config.port, console.log(`Listening to ${config.url}`));
