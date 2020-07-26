const express = require('express');
const app = express();
const methodOverride = require('method-override');


//middleware
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))

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
  // console.log(req.body);
  // res.send('data receieved');
  if(req.body.readyToEat === 'on'){
      req.body.readyToEat = true;
  } else {
      req.body.readyToEat = false;
  }
  fruits.push(req.body); //adds the new item to db/array
  // console.log(fruits); //logs in terminal
  // res.send('data receieved'); //sends user a message
  res.redirect('/fruits'); //sends user back to index page
})

//SHOW route
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
  res.send(fruits[req.params.indexOfFruitsArray]);
});

//EDIT route
app.get('/fruits/:indexOfFruitsArray/edit', (req, res) => {
  res.render(
      'edit.ejs',
        {
            fruit: fruits[req.params.indexOfFruitsArray],
            index: req.params.indexOfFruitsArray
        }
  )
})

//DELETE route
app.delete('/fruits/:indexOfFruitsArray', (req, res) => {
    fruits.splice(req.params.indexOfFruitsArray, 1);
    res.redirect('/fruits'); //redirect to index page
})

app.listen(3000, () => {
  console.log('listening...🍌🍒🥝🍓🍆');
})
