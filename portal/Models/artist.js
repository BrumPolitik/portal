var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Artist = new Schema({
  name: String,
  desc: String,
  location: String
});


module.exports = mongoose.model('Artist', Artist);