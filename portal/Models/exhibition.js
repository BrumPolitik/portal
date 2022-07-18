var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Exhibition = new Schema({
  name: String,
  desc: String,
  artist: String,
  current: Boolean,
  upcoming: Boolean,
  img:
  {
      data: Buffer,
      contentType: String
  }
});


module.exports = mongoose.model('Exhibition', Exhibition);