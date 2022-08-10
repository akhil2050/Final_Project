var mongoose = require("mongoose");

var dbUri = 'mongodb+srv://srijith:srijith123@cluster0.bswi1.mongodb.net/finalProject?retryWrites=true&w=majority';

mongoose.connect(dbUri, 
    {dbName: 'finalProject' });  

mongoose.connection.on('connected', function(){

    console.log('Successfully connected');

});

mongoose.connection.on('disconnected', function(){

    console.log('Application disconnected');

});

mongoose.connection.on('error', function(){

    console.log('Connection error');

});

require('./users');
require('./recipe');
require('./chefs');
require('./food');
require('./locator');

