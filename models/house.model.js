var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HouseSchema = new Schema({
    name : String,
    booksCollection : [{bookId : mongoose.Schema.Types.ObjectId}]
});

var House = mongoose.model('Gender', HouseSchema);
module.exports = House;