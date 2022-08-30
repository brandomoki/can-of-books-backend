'use strict';
// Bringing in Mongoose
const mongoose = require('mongoose');

// Extract Schema property from mongoose object
const { Schema } = mongoose;


const bookSchema = new Schema({
  title: { type: String, required: true },
  status: { type: Boolean, required: true },
  description: { type: String, required: true},
});


const BookModel = mongoose.model('book', bookSchema);


module.exports = BookModel;
