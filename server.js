const express = require('express');
const app = express();

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

//create goes above show route
app.get('/fruits/new', (req, res) => {
  res.render('new.ejs')
})

//add show route
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
  res.send(fruits[req.params.indexOfFruitsArray]);
});


app.listen(3000, () => {
  console.log('listening...🍌🍒🥝🍓🍆');
})
