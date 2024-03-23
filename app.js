const express = require("express");
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middlewares/not-found')
const errorHandler = require('./middlewares/errorhandler')
// middleware
app.use(express.static('./public'))
app.use(express.json()); // parses the incoming json payloads

//routes
app.use('/api/v1/tasks', tasks);
app.use(notFound); // for all other routes not matching the defined routes use this
// using call back without a route will invoke the callback from any route except the defined one. also it has
//to be kept below the defined routes, otherwise the results will not be as expected.
app.use(errorHandler);


const start = async function () { 
    try {
        await connectDB(process.env.URI_Sting).then(() => { console.log("DB connected")});
        app.listen(3000, ()=>{console.log('server listening at 3000')});
    }
    catch (err) {
        console.log(err);
    }
}
start();
