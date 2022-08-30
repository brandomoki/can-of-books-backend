'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//**************************************Bring in Mongoose */
mongoose.connect(process.env.DB_URL);

const Book = require('./models/book.js');
//**************************************
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is Live!!!');
});

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

app.get('/', (request, response) => {

  response.status(200).send('Welcome');

});

app.get('/books', getBooks);

async function getBooks(request, response, next) {
  try {
    let results = await Book.find();
    response.status(200).send(results);

  } catch (error) {
    next(error);
  }
}

app.post('/books', postBooks);

async function postBooks(request, response, next) {
  console.log(request.body);
  try {
    const newBook = await Book.create(request.body);
    response.status(201).send(newBook);

  } catch (error) {
    next(error);
  }
}

app.delete('/books/:bookid', deleteBook);

async function deleteBook(request, response, next) {
  const id = request.params.bookid;
  console.log(id);
  try {
    await Book.findByIdAndDelete(id);
    response.status(204).send('success!');
  } catch (error) {
    next(error);
  }
}

app.get('*', (request, response) => {
  response.status(404).send('The path you have chosen does not exist');
});

app.use((error, request, response) => {
  response.status(500).send(error.message);
});


app.listen(PORT, () => console.log(`listening on ${PORT}`));
