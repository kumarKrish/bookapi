const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Bookapi', { useNewUrlParser: true });


// routes define
const books = require('./routes/books');

// middle wares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//routes
app.use('/books',books);

//server start
port = process.env.Port || 3000;
app.listen(port, () => {
   console.log(`hey server started ${port}`);
})
