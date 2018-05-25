var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Book = require('./models/book.model');
var User = require('./models/user.model');
var Agreement = require('./models/agreement.model');
var House = require('./models/house.model');
var Kind = require('./models/kind.model');

mongoose.connect('mongodb://localhost/library');



//dodanie ksiażki
/* var ksiazka = new Book({
    name : 'narnia'
});
ksiazka.save(function(err) {
    if (err) throw err;
  
    console.log('User saved successfully!');
}); */

/* var userek = new User ({
    name : 'kasia'
});

userek.save (function(err){
    if (err) throw err;

    console.log('udalo sie userek');
});



//usunięcie książki
// get the user starlord55
Book.find({ name : 'narnia' }, function(err, book) {
  if (err) throw err;

  console.log(book)
  // delete him
  Book.remove(function(err) {
    if (err) throw err;

    console.log('User successfully deleted!');
  });
}); */

console.log('działa');

