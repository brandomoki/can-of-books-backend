'use strict';

const { default: mongoose } = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.DB_URL);

const Book = require('./models/book.js');


async function seed() {
//title: { type: String, required: true },
//status: { type: Boolean, required: true },
// description: { type: String, required: true},


  await Book.create({
    title: 'The Fellowship of the Ring, Lord of the Rings',
    status: true,
    description: 'One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkeness bind them',

  });
  console.log('The Fellowship of the Ring was added');

  await Book.create({
    title: 'The Two Towers, Lord of the Rings',
    status: true,
    description: 'Frodo and his Companions of the Ring have been beset by danger during their quest to prevent the Ruling Ring from falling into the hands of the Dark Lord by destroying it in the Cracks of Doom. They have lost the wizard, Gandalf, in a battle in the Mines of Moria. And Boromir, seduced by the power of the Ring, tried to seize it by force. While Frodo and Sam made their escape, the rest of the company was attacked by Orcs. Now they continue the journey alone down the great River Anduin—alone, that is, save for the mysterious creeping figure that follows wherever they go.',

  });
  console.log('The Two Towers was added');

  await Book.create({
    title: 'The Return of the King, Lord of the Rings',
    status: true,
    description: 'The Dark Lord has risen, and as he unleashes hordes of Orcs to conquer all Middle-earth, Frodo and Sam struggle deep into his realm in Mordor. To defeat Sauron, the One Ring must be destroyed in the fires of Mount Doom. But the way is impossibly hard, and Frodo is weakening. The Ring corrupts all who bear it and Frodo’s time is running out. Will Sam and Frodo succeed, or will the Dark Lord rule Middle-earth once more?',

  });
  console.log('The Return of the King was added');

  mongoose.disconnect();
  

}

seed();
