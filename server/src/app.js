require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require("helmet");
const myDatabase = require("./config/database")


const routes = require('./routes');

const app = express()
app.use(helmet());
app.use(cors()); 
app.use(express.json());  
app.use('/api', routes); 








module.exports = app;