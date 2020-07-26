const express = require('express');
const router = express.Router();


//NEW route
router.get('/fruits/new', (req, res) => {
  res.render('new.ejs');
})

//CREATE route
router.post('/fruits/', (req, res) => {
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

//SHOW route
router.get('/fruits/:id', (req, res) => {
  Fruit.findById(req.params.id, (err, foundFruit) => {
    res.render('show.ejs', {
      fruit:foundFruit
    });
  });
});

//INDEX route
router.get('/fruits', (req, res) => {
  Fruit.find({}, (error, allFruits) => {
      res.render('index.ejs', {
          fruits: allFruits
      })
  })
})

//DELETE route
router.delete('/fruits/:id', (req, res) => {
  Fruit.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect('/fruits');
  });
});

//EDIT route
router.get('/fruits/:id/edit', (req, res) => {
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
router.put('/fruits/:id', (req, res) => {
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
