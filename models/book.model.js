
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    name: {type: string, required: true, unique: true},
    authorName : string,
    authorSurname : string,
    pYear : string,
    pId : string,
    gName : string

});

var Book = mongoose.model('Book', BookSchema);
module.exports = Book;
