var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var linkSchema = new Schema({
  id: String,
  name: String,
  grievance: String,
  forgiven: Boolean
});

module.exports = mongoose.model('Grudge', linkSchema);
