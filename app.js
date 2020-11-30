const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(bodyParser.json());
app.use(cors());

//Routes
const peopleRoute = require('./routes/peoples');
app.use('/people', peopleRoute);

//Connection
mongoose.connect(process.env.DB_CONNECTION, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
    }, () => 
    console.log('connected to DB!')
);
























app.listen(3000);