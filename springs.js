const express = require('express');
const { appendFile } = require('fs');
const { valid } = require('joi');
const Joi = require('joi');
const springs = express();
const genres= require('./routes/genres');


springs.use(express.json());
springs.use('/springs/api/genres',genres)
//finished project springs backend genre



const port = process.env.port || 600

springs.listen(port,()=>{console.log(`Listening on ${port}`);});