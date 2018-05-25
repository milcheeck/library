var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var KindSchema = new Schema ({
    name : String,
    booksCollectios : [{bookId : mongoose.Schema.Types.ObjectId}]
});

var Kind = mongoose.model('Kind', KindSchema);
module.exports = Kind;

