const express = require('express');
const router = express.Router();
const Alcohol = require('../models/alcohol.js')


//NEW route
router.get('/new', (req, res) => {
  res.render('new.ejs');
})

//CREATE route
router.post('/', (req, res) => {
  // res.send(req.body);
  if(req.body.isAlcoholic === 'on'){
    req.body.isAlcoholic = true;
  } else {
    req.body.isAlcoholic = false;
  }
  Alcohol.create(req.body, (error, createdAlcohol) => {
    res.redirect('/alcohol');
  });
});

//INDEX route
router.get('/', (req, res) => {
  Alcohol.find({}, (error, allAlcohol) => {
      res.render('index.ejs', {
          alcohol: allAlcohol
      })
  })
})

//SHOW route
router.get('/:id', (req, res) => {
  Alcohol.findById(req.params.id, (error, foundAlcohol) => {
    res.render(
      'show.ejs',
      {
      alcohol:foundAlcohol
      }
    );
  });
});



//DELETE route
router.delete('/:id', (req, res) => {
  Alcohol.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect('/alcohol');
  });
});



//EDIT route
router.get('/:id/edit', (req, res) => {
  Alcohol.findById(req.params.id, (err, foundAlcohol) => {
    res.render(
      'edit.ejs',
        {
            alcohol: foundAlcohol
        }
    )
  })
})

//PUT route
router.put('/:id', (req, res) => {
  if(req.body.isAlcoholic === 'on'){
    req.body.isAlcoholic = true;
  } else {
    req.body.isAlcoholic = false;
  }
  Alcohol.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel) => {
    res.redirect('/alcohol');
  })
})




module.exports = router;
