const mongoose = require('mongoose');

const alcoholSchema = new mongoose.Schema({
  name: { type: String, required: true},
  image: { type: String, required: true},
  isAlcoholic: Boolean
});

const Alcohol = mongoose.model('Alcohol', alcoholSchema);

module.exports = Alcohol;
