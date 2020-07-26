const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const app = express();
const fruitsController = require('./controllers/fruits.js');
app.use('/fruits', fruitsController);



//middleware
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));




//connections
mongoose.connect('mongodb://localhost:27017/basiccrud', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
  console.log('The connection with mongod is established')
})

app.listen(3000, () => {
  console.log('listening...🍌🍒🥝🍓🍆');
})
