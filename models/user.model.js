var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName : String,
    name : String,
    birthDate : Date,
    email: String,
    phone : String,
    city : String,
    district : String,
    booksCollection : [{bookId : mongoose.Schema.Types.ObjectId}],
    agreementsCollection : [{agreementId : mongoose.Schema.Types.ObjectId}]
});

var User = mongoose.model('User', UserSchema);
module.exports = User;