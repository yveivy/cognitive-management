const router = require('express').Router();
const {readFromFile, readAndAppend, writeToFile} = require('../helpers/fsHelpers');
const uuid = require('../helpers/uuid');



router.get('/', (req, res) => {
  
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));


});

router.post('/', (req, res) => {

  const { title, text } = req.body;

  if (req.body) {
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
        res.status(500).json('Sorry, it did not work out')
      });

  } else {
    res.status(400).json('formatting is important');
  }

});
// May try to incorporate this
// app.delete for bonus


module.exports = router;