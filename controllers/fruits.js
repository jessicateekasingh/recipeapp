const express = require('express');
const router = express.Router();
const Fruit = require('../models/fruits.js')


//NEW route
router.get('/new', (req, res) => {
  res.render('new.ejs');
})

//CREATE route
router.post('/', (req, res) => {
  // res.send(req.body);
  if(req.body.readyToEat === 'on'){
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Fruit.create(req.body, (error, createdFruit) => {
    res.redirect('/fruits');
  });
});

//INDEX route
router.get('/', (req, res) => {
  Fruit.find({}, (error, allFruits) => {
      res.render('index.ejs', {
          fruits: allFruits
      })
  })
})

//SHOW route
router.get('/:id', (req, res) => {
  Fruit.findById(req.params.id, (error, foundFruit) => {
    res.render(
      'show.ejs',
      {
      fruit:foundFruit
      }
    );
  });
});



//DELETE route
router.delete('/:id', (req, res) => {
  Fruit.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect('/fruits');
  });
});



//EDIT route
router.get('/:id/edit', (req, res) => {
  Fruit.findById(req.params.id, (err, foundFruit) => {
    res.render(
      'edit.ejs',
        {
            fruit: foundFruit
        }
    )
  })
})

//PUT route
router.put('/:id', (req, res) => {
  if(req.body.readyToEat === 'on'){
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Fruit.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel) => {
    res.redirect('/fruits');
  })
})




module.exports = router;
