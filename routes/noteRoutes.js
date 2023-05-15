const app = require('express').Router();
const {readFromFile, readAndAppend, writeToFile} = require('../helpers/fsHelpers');
const uuid = require('../helpers/uuid');



app.get('/', (req, res) => {
  console.info(`${req.method} request received to retrieve notes`)

  readFromFile('./db/db.json')
  .then((data) => {
    const notes = JSON.parse(data);
    res.json(notes);
  })
  .catch((err) => {
    console.error(err);
    res.status(500).json('Error retrieving notes');
  });

});

app.post('/', (req, res) => {
  console.info(`${req.method}request received to create new note`);

  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      id: uuid(),
      title,
      text,
    };

    readAndAppend(newNote, './db/db.json')
      .then(() => {
        res.json('Note created successfully')
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json('Error creating note')
      });

  } else {
    res.status(400).json('Title and text are required');
  }

});
// May try to incorporate this
// app.delete


module.exports = app;