
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    name : String,
    authorName : String,
    authorSurname : String,
    pYear : String,
    pId : String,
    gName : String

});

var Book = mongoose.model('Book', BookSchema);
module.exports = Book;

