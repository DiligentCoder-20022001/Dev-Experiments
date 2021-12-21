//OM GAN GANAPATHAYE NAMO NAMAH 
//JAI SHRI RAM 
//JAI BAJRANGBALI 
//AMME NARAYANA, DEVI NARAYANA, LAKSHMI NARAYANA, BHADRE NARAYANA
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
//api paths 
//create api routes
const getPlace = require('./routes/getPlace');
app.use('/', getPlace);
app.listen(port, () => {
    console.log("Server successfully running on port : " + port);
})