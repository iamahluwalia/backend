const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const server = require("http").createServer(app);
require('dotenv').config();


app.use(cors());

//Using Body Parser
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//importing models
require('./Models/mainSchema')
require('./Models/Owners')

//importing routes
const mainRoute = require("./Routes/mainRoutes");

//using routes
app.use(mainRoute);

//Connecting to database
mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB' ,process.env.MONGO);
})

mongoose.connection.on('error', (err) => {
    console.log(err);
})

server.listen(process.env.PORT, () => {
    console.log(`Server started on port no. ${process.env.PORT}`)
})