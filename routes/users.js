var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ajax');

var userSchema = mongoose.Schema({
   username:String,
   password:String
});

module.exports = mongoose.model('user',userSchema);