const express = require('express');
const app = express();


//middleware
app.use(express.urlencoded({extended:true}));

//data/array/api
const fruits = [
  {
    name: 'apple',
    color: 'red',
    readyToEat: true,
  },
  {
    name: 'pear',
    color: 'green',
    readyToEat: false,
  },
  {
    name: 'banana',
    color: 'yellow',
    readyToEat: true,
  }
];

app.get('/fruits/', (req, res) => {
  res.send(fruits);
});

//CREATE goes above show route
app.get('/fruits/new', (req, res) => {
  res.render('new.ejs')
})
//create + POST
app.post('/fruits', (req, res) => {
  // res.send('hi');
  console.log(req.body);
  res.send('data receieved');
})

//SHOW route
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
  res.send(fruits[req.params.indexOfFruitsArray]);
});


app.listen(3000, () => {
  console.log('listening...🍌🍒🥝🍓🍆');
})
