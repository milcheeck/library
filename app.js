var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Book = require('./models/book.model');

mongoose.connect('mongodb://localhost/library');



var ksiazka = new Book({
    name : 'narnia'
});

ksiazka.save(function(err) {
    if (err) throw err;
  
    console.log('User saved successfully!');
});