var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AgreementSchema = new Schema({
    name : String,
    isAccepted : Boolean,
    description : String
});

var Agreement = mongoose.model('Agreement', AgreementSchema);
module.exports = Agreement;